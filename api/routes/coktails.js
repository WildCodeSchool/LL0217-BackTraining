import express from 'express';
import Cocktail from '../models/cocktail.js';

let router = express.Router();

module.exports = (app) => {

    var cocktail = new Cocktail();

    router.put('/update/:_id', cocktail.updateOne);

    router.delete('/delete/:_id', cocktail.deleteOne);

    router.get('/name/:name', cocktail.findName);

    router.get('/ingredients/:ingredients', cocktail.findIngredients);

    router.get('/id/:_id', cocktail.findId);

    router.post('/', cocktail.create);

    router.get('/', cocktail.findAll);

    app.use('/cocktails', router);

};
