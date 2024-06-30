const bcrypt = require("bcrypt");
const express = require('express');
const router = express.Router();
const db = require('../db.js').db;

router.get('/login/:email/:password', async (req, res) => {
    const email = req.params['email'];
    const password = req.params['password'];

    if (!email || !password) {
        res.status(400).json({ message: 'Missing email or password' });
        return;
    }

    try {
        db.query(`SELECT * FROM kunde WHERE email='${email}'`, (error, result) => {
            if (error) throw error;
            if (result.length === 0) {
                res.status(401).json({ message: 'Wrong email or password' });
                return;
            }
            const user = result[0];
            bcrypt.compare(password, user['password']).then(match => {
                if (match) {
                    user['password'] = '';
                    res.status(200).json(user);
                } else {
                    res.status(401).json({ message: 'Wrong email or password' })
                }
            });
        });
    } catch (err) {
        res.status(500).json({ message: JSON.stringify(err) })
    }
});

router.post('/', async (req, res) => {
    try {
        const user = req.body;
        if (user['kundennr']) {
            delete user['kundennr'];
        }
        if (Object.values(user).length !== 5) {
            throw (new Error('User is incomplete'));
        }
        
        db.query(`SELECT * FROM kunde WHERE email='${user['email']}'`, (error, result) => {
            if (error) throw error;
            if (result.length > 0) {
                res.status(500).json({ message: 'User already exists!' })
                return;
            }
            bcrypt.hash(user['password'], 10).then(hash => {
            user['password'] = hash;
            db.query('INSERT INTO kunde (name, vorname, adresse, email, password) VALUES (?, ?, ?, ?, ?)', Object.values(user), (error, result) => {
                if (error) throw error;
                db.query('SELECT LAST_INSERT_ID() AS id', (error, result) => {
                    if (error) throw error;
                    
                    const insertedId = result[0].id;
                    res.status(200).json({ id: insertedId });
                });
            });
        });
        });
        
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

module.exports = router;