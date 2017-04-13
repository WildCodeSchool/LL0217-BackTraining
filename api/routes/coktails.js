import express from 'express';
import Cocktail from '../models/cocktail.js';

let router = express.Router();

module.exports = (app) => {

    var cocktail = new Cocktail();

    router.get('/', cocktail.findAll);
    router.post('/', cocktail.post);
    router.get('/name/:name', cocktail.findByName);
    router.get('/:id', cocktail.findById);
    router.get('/ingredients/:ingredients', cocktail.findByIngredients);
    router.put('/', cocktail.put);
    router.delete('/:id', cocktail.delete);



    app.use('/cocktails', router);

};
