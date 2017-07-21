import express from 'express';
import City from '../models/city.js';

let router = express.Router();

module.exports = (app) => {

    var city = new City();

    // router.put('/update/:_id', city.updateOneId);
    //
    router.put('/update/:cityName', city.updateOneCityName);
    //
    // router.delete('/delete/:_id', city.deleteOneId);
    //
    // router.delete('/delete/:cityName', city.deleteOneCityName);
    //
    router.get('/name/:cityName', city.findCityName);
    //
    // router.get('/id/:_id', city.findOneId);
    //
    router.post('/', city.create);
    //
    router.get('/', city.findAll);

    app.use('/citys', router);

};
