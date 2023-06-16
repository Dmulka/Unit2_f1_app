const getCRUD = require('./crudControllers')
const { Comment } = require('../models')

const getComments = async (req, res) => {
    let comments;
    if (req.query.sort === "asc") {
        comments = await Comment.find({}).sort({
            updatedAt: 1,
        });
    } else if (req.query.sort === "desc") {
        comments = await Comment.find({}).sort({
            updatedAt: -1,
        });
    } else {
        comments = await Comment.find({});
    }
    res.json(comments);
};

const getCommentById = async (req, res) => {
    getCRUD.getObjectById(req, res, Comment);
};

////create/////

const createComment = async (req, res) => {
    getCRUD.createObject(req, res, Comment);
};

////update/////

const updateComment = async (req, res) => {
    getCRUD.updateObjectByID(req, res, Comment);
};

////delete/////

const deleteComment = async (req, res) => {
    getCRUD.deleteObjectByID(req, res, Comment);
};

module.exports = {
    createComment,
    getComments,
    getCommentById,
    updateComment,
    deleteComment,
};

