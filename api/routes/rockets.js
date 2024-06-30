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

router.get('/seats/', async (req, res) => {
    try {
        db.query('SELECT sitzplatz.sitzplatznr, raketennr, preis, bezeichnung, ticketnr AS belegt, tourterminnr FROM sitzplatz LEFT JOIN ticket ON sitzplatz.sitzplatznr = ticket.sitzplatznr', (error, result) => {
            if (error) throw error;
            result.map(r => r['belegt'] = r['belegt'] ? true : false);
            res.status(200).json(result);
        });
    } catch (err) {
        res.status(500).json({message: JSON.stringify(err)})
    }
});


// router.get('/seats/', async (req, res) => {
//     try {
//         db.query('SELECT sitzplatz.sitzplatznr, raketennr, preis, bezeichnung, ticketnr AS belegt FROM sitzplatz JOIN ticket ON sitzplatz.sitzplatznr = ticket.sitzplatznr', (error, result) => {
//             if (error) throw error;
//             result.map(r => r['belegt'] = r['belegt'] ? true : false);
//             console.log(JSON.stringify(result));
//             res.status(200).json(result);
//         });
//     } catch (err) {
//         res.status(500).json({message: JSON.stringify(err)})
//     }
// });


module.exports = router;