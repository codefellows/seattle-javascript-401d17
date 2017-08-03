'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const debug = require('debug')('note:list-router');
const createError = require('http-errors');
const List = require('../model/list.js');
const listRouter = module.exports = new Router();

listRouter.post('/api/list', jsonParser, function(req, res, next) {
  debug('POST: /api/list');

  req.body.timestamp = new Date();
  new List(req.body).save()
  .then( list => res.json(list))
  .catch(next);
});

listRouter.get('/api/list/:id', function(req, res, next) {
  debug('GET: /api/list');

  List.findById(req.params.id)
  .populate('notes')
  .then( list => res.json(list))
  .catch(next);
});

listRouter.put('/api/list/:id', jsonParser, function(req, res, next) {
  debug('PUT: /api/list/:id');

  List.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then( list => res.json(list))
  .catch( err => {
    if (err.name === 'ValidationError') return next(err);
    next(createError(404, err.message));
  });
});

listRouter.delete('/api/list/:id', function(req, res, next) {
  debug('DELETE: /api/list/:id');

  List.findByIdAndRemove(req.params.id)
  .then( () => res.status(204).send())
  .catch( err => next(createError(404, err.message)));
});
