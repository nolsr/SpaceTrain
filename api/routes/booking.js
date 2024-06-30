const express = require('express');
const router = express.Router();
const db = require('../db.js').db;

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        if (!data['preis'] || !data['tourterminnr'] || !data['kundennr'] || !data['sitze'] || data['sitze'].length === 0) {
            res.status(400).json({ message: 'Missing data!' });
            return;
        }
        console.log(JSON.stringify(data));

        db.query('INSERT INTO buchung (gesamtpreis, kundennr) VALUES (?, ?)', [data['preis'], data['kundennr']], (error, result) => {
            if (error) throw error;
            db.query('SELECT LAST_INSERT_ID() AS buchungsnr', (error, result) => {
                if (error) throw error;
                const buchungen = [];
                data['sitze'].forEach(sitznr => {
                    buchungen.push([result[0].buchungsnr, sitznr, data['tourterminnr']]);
                });
                console.log(JSON.stringify(buchungen));
                db.query('INSERT INTO ticket (buchungsnr, sitzplatznr, tourterminnr) VALUES ?', [buchungen], (error, result) => {
                    if (error) throw error;
                    res.status(200).json();
                });
            });
        });
        res.status(200);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

module.exports = router;