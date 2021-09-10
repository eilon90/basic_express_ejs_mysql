const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'exercise_6'
});

router.use(express.json());
router.use(express.urlencoded({extended: false}));

router.get('/', function(req, res) {
    connection.query('SELECT * FROM Beatles', function (error, results, fields) {
        if (error) throw error;
        res.render('pages/index', {
            beatles: results
        })
    })
})

module.exports = router;