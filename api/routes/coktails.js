import express from 'express';
import Cocktail from '../models/cocktail.js';

let router = express.Router();

module.exports = (app) => {

    var cocktail = new Cocktail();




    router.put('/:id',cocktail.updateOne);
    //
   router.get('/methode/:methode',cocktail.findByMethode);

   //router.get('/ingredients/:ingredients',cocktail.findByIngredient);
    //
    router.get('/name/:name',cocktail.findByName);

    router.get('/:id',cocktail.findById);//on met ':' car id est variable

    router.get('/', cocktail.findAll);

    router.delete('/:id',cocktail.delete);

    router.post('/',cocktail.create);


    app.use('/cocktails', router);

};
