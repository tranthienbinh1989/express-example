var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var inventors = {};
    fs.readFile(path.join(__dirname, '../data/inventors.json'), { 'encoding': 'utf-8' }, (err, data) => {
        if (err) throw err;
        inventors = JSON.parse(data);
        res.render('inventor', { title: 'Inventors List', 'inventors': inventors });
    });
});

module.exports = router;