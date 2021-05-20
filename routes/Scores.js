const express = require('express')
const Scores = require('../models/Scores')

const scoreRouter = express.Router()

scoreRouter.route('/')
    .get((req, res, next) => {
        Scores.find()
        .then(scores => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(scores);
        })
    })
    .post((req, res, next) => {
        Scores.create(req.body)
        .then(score => {
            console.log('score added: ', score)
            res.statusCode  = 200
            res.setHeader('Content-Type', 'application/json')
            res.json(score)
        })
        .catch(err => next(err))
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /scores');
    })
    .delete((req, res, next) => {
        Scores.deleteMany()
        .then(response => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(response);
        })
        .catch(err => next(err));
    });
  
module.exports = scoreRouter;