var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {});

/* POST a new user. */
router.post('/', function (req, res, next) {});

/* DELETE a user. */
router.delete('/', function (req, res, next) {});

/* PATCH a user. */
router.patch('/', function (req, res, next) {});

/* Delete a users comments. */
router.delete('/comments', function (req, res, next) {});

module.exports = router;
