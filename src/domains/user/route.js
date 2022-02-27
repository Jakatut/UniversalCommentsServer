var express = require('express');
var router = express.Router();
const { sequelize } = require('database');
const models = sequelize.models;

/* GET users listing. */
router.get('/', async function (req, res, next) {
    const users = await models.user.findAll();
    return res.status(200).json(users);
});

/* POST a new user. */
router.post('/', async function (req, res, next) {
    const user = await models.user.create();
    return res.status(201).json(user);
});

/* DELETE a user. */
router.delete('/:id', async function (req, res, next) {
    const deleted = await models.user.delete(req.params.id);
    return res.status(deleted ? 204 : 400)
});

/* Delete a users comments. */
router.delete('/:id/comments', async function (req, res, next) {
    const users = await models.user.findOne({where: {id: req.params.id}, include: [ { model: models.comment, as: 'comments' }]})
    await users.setComments([]);
    return res.status(204).json()
});

module.exports = router;
