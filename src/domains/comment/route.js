var express = require('express');
var router = express.Router();
const { sequelize } = require('database');
const models = sequelize.models;

const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

function checkIfValidUUID(str) {
    // Regular expression to check if string is a valid UUID
    const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  
    return regexExp.test(str);
  }

/* GET comment listing. */
router.get('/', async function (req, res, next) {
    const comments = await models.comment.findAll();
    return res.status(200).json(comments);
});

/* GET a specific comment, with references to it's child comments (replies). */
router.get('/:id', async function (req, res, next) {
    const id = req.params.id;
    if (!checkIfValidUUID(id)) {
        return res.status(400).json({error: 'ID Is not valid.'}).send();
    }

    const comment = await models.comment.findAll({where: { id: req.params.id }})
    return res.status(200).json(comment);
});

/* POST a comment to a url. */
router.post('/', async function (req, res, next) {
    const comment = await models.comment.create(req.body)
    return res.status(200).json(comment);
});

/* POST a reply to a comment. */
router.post('/:parent_id', async function (req, res, next) {
    const parent_id = req.params.parent_id;
    if (!checkIfValidUUID(id)) {
        return res.status(400).json({error: 'ID Is not valid.'}).send();
    }

    // Check if the parent comment exists before creating the reply.
    let parentComment = await models.comment.findByPk(id)
    if (!parentComment) {
        return res.status(400).json({error: 'Unable to find parent comment'})
    }

    const replyComment = await models.comment.create({ parent_id, ...req.body})
    return res.status(201).json(replyComment);
});

/* PATCH a comment. */
router.patch('/:id', async function (req, res, next) {
    const updatedComment = await models.comment.update({id: req.params.id, ...req.body})
    return res.status(200).json(updatedComment);
});

/* DELETE a comment. This is executed as a "soft" delete where the comment is marked as deleted and the content is removed. */
router.delete('/:id', async function (req, res, next) {
    const deleted = await models.comment.delete(req.params.id)
    return res.status(deleted ? 201 : 400)
});

module.exports = router;
