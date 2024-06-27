const express = require('express');
const router = express.Router();
const db = require('../db.js').db;

router.get('/', async (req, res) => {
    try {
        db.query('SELECT tournr, tourname as name, beschreibung, ort, preisklasse.multiplikator as preisklasse FROM tour JOIN preisklasse ON tour.preisklassennr = preisklasse.preisklassennr', (error, result) => {
            if (error) throw error;
            res.status(200).json(result);
        });
    } catch (err) {
        res.status(500).json({message: JSON.stringify(err)})
    }
});

router.get('/dates/:tournr', async (req, res) => {
    try {
        const tournr = req.params['tournr'];
        db.query(`SELECT * FROM tourtermin WHERE tournr = ${tournr}`, (error, result) => {
            if (error) throw error;
            res.status(200).json(result);
        });
    } catch (err) {
        res.status(500).json({message: JSON.stringify(err)})
    }
});

module.exports = router;