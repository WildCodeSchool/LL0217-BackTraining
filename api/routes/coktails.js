import express from 'express';
import Cocktail from '../models/cocktail.js';

let router = express.Router();

module.exports = (app) => {

    var cocktail = new Cocktail();

    router.get('/:name', cocktail.findName);

    router.post('/', cocktail.create);

    router.get('/', cocktail.findAll);

    app.use('/cocktails', router);

};
