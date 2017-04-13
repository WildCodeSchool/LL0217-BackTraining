import express from 'express';
import Cocktail from '../models/cocktail.js';

let router = express.Router();

module.exports = (app) => {

    var cocktail = new Cocktail();

    router.get('/', cocktail.findAll);

    router.put('/:id', cocktail.update);

    router.get('/ingredients/:ingredients', cocktail.findByIngredients);

    router.get('/name/:name', cocktail.findByName);

    router.post('/', cocktail.create);

    router.delete('/:id', cocktail.delete);

    app.use('/cocktails', router);

};
