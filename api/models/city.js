import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
  // Write schema here.


  country: {
    type: String
  },

  city: {
    type: String
  },

  year: {
    type: Number
  }

});


let model = mongoose.model('City', citySchema);

export default class City {



  create(req, res) {
    model.create(req.body, (err, city) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json(city);
      }
    });
  }

  updateOneCityName(req, res) {
  model.update({
      bob: req.params.city              // C'est ce que tu recherches =>  _id : req.params.id
  }, req.body, (err, city) => {          // Les champs que tu modifies => req.body
      if (err) {
          res.status(500).send(err.message);
      } else {
              res.sendStatus(200);
      }
  });
  }

  findCityName(req, res) {
    model.find({
      city /*ingredients correspond au schéma*/: req.params.cityName /*.ingredients correspond au /:ingredients*/
    }, (err, city) => {
      if (err || !city) {
        res.status(403);
      } else {
        res.json(city);
      }
    });
  }


  findAll(req, res) {
    model.find({}, (err, cocktails) => {
      if (err || !cocktails) {
        res.sendStatus(403);
      } else {
        res.json(cocktails);
      }
    });
  }



}
