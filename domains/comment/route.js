var express = require('express');
var router = express.Router();

/* GET comment listing. */
router.get('/', function (req, res, next) {});

/* GET a specific comment, with references to it's child comments (replies). */
router.get('/{id}', function (req, res, next) {});

/* POST a comment to a url. */
router.post('/', function (req, res, next) {});

/* POST a reply to a comment. */
router.post('/{id}/reply', function (req, res, next) {});

/* PATCH a comment. */
router.patch('/{id}', function (req, res, next) {});

/* DELETE a comment. This is executed as a "soft" delete where the comment is marked as deleted and the content is removed. */
router.delete('/{id}', function (req, res, next) {});

module.exports = router;
