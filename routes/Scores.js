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
  
module.exports = scoreRouter;