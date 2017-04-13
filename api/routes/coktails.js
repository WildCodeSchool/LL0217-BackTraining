import express from 'express';
import Cocktail from '../models/cocktail.js';

let router = express.Router();

module.exports = (app) => {

    var cocktail = new Cocktail();

    router.get('/', cocktail.findAll);
    router.get('/name/:name', cocktail.findByName);
    router.get('/:id', cocktail.findOne);
    router.get('/ingredients/:ingredients', cocktail.findByIngredient);
    router.post('/', cocktail.create);
    router.put('/:id', cocktail.update);
    router.delete('/:id', cocktail.delete);
    app.use('/cocktails', router);

};
