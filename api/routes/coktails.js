import express from 'express';
import Cocktail from '../models/cocktail.js';

let router = express.Router();

module.exports = (app) => {

    var cocktail = new Cocktail();

    router.get('/', cocktail.findAll);

    router.put('/:id', cocktail.update);

    router.get('/:name', cocktail.findByName);

    router.post('/', cocktail.create);

    app.use('/cocktails', router);

};
