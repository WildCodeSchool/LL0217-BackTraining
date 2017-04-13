import express from 'express';
import Cocktail from '../models/cocktail.js';

let router = express.Router();

module.exports = (app) => {

    var cocktail = new Cocktail();

    router.get('/', cocktail.findAll);
    router.post('/', cocktail.post);
    router.get('/', cocktail.findById);
    router.get('/', cocktail.findByName);
    router.get('/', cocktail.findByIngredients);
    router.put('/', cocktail.put);
    router.delete('/', cocktail.delete);



    app.use('/cocktails', router);

};
