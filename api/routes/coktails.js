import express from 'express';
import Cocktail from '../models/cocktail.js';

let router = express.Router();

module.exports = (app) => {

    var cocktail = new Cocktail();

    router.get('/', cocktail.findAll);

    router.get('/:id', cocktail.findAllId);

    router.get('/name/:name', cocktail.findAllName);

    router.get('/ingredients/:ingredients', cocktail.findAllIngredient);

    router.post('/', cocktail.addCocktail);

    router.put('/:id', cocktail.edCocktail);

    router.delete('/:id', cocktail.delCocktail);


    app.use('/cocktails', router);

};
