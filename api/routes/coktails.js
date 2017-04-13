import express from 'express';
import Cocktail from '../models/cocktail.js';

let router = express.Router();

module.exports = (app) => {

    var cocktail = new Cocktail();

    router.get('/', cocktail.findAll);
    // router.get('/', cocktail.findAdd);
    router.post('/', cocktail.addCocktail);


    app.use('/cocktails', router);

};
