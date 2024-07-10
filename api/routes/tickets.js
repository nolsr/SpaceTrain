const express = require('express');
const router = express.Router();
const db = require('../db.js').db;

router.get('/:kundennr', async (req, res) => {
    try {
        const kundennr = req.params['kundennr'];
        db.query(`SELECT * FROM ticket
            JOIN buchung ON ticket.buchungsnr = buchung.buchungsnr
            JOIN sitzplatz ON ticket.sitzplatznr = sitzplatz.sitzplatznr
            JOIN tourtermin ON ticket.tourterminnr = tourtermin.tourterminnr
            JOIN rakete ON tourtermin.raketennr = rakete.raketennr
            JOIN tour ON tourtermin.tournr = tour.tournr
            WHERE buchung.kundennr = ${kundennr}`, (error, result) => {
            if (error) throw error;
            res.status(200).json(result);
        });
    } catch (err) {
        res.status(500).json({ message: JSON.stringify(err) })
    }
});

router.delete('/:ticketnr', async (req, res) => {
    try {
        const ticketnr = req.params['ticketnr'];
        db.query(`DELETE FROM ticket WHERE ticketnr = ${ticketnr}`, (error, result) => {
            if (error) throw error;
            res.status(200).json();
        });
    } catch (err) {
        res.status(500).json({ message: JSON.stringify(err) })
    }
});

module.exports = router;