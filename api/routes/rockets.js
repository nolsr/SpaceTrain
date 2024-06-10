const express = require('express');
const router = express.Router();
const db = require('../db.js').db;

router.get('/', async (req, res) => {
    try {
        db.query('SELECT * FROM rakete', (error, result) => {
            if (error) throw error;
            res.status(200).json(result);
        });
    } catch (err) {
        res.status(500).json({message: JSON.stringify(err)})
    }
});

module.exports = router;