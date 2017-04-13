import express from 'express';
import Cocktail from '../models/cocktail.js';

let router = express.Router();

module.exports = (app) => {

    var cocktail = new Cocktail();

    router.get('/', cocktail.findAll);

    router.get('/ingredients/:ingredients', cocktail.findByIngredients);

    router.get('/name/:name', cocktail.findByName);

    router.get('/id/:id', cocktail.findById);

    router.post('/', cocktail.create);

    app.use('/cocktails', router);

};
