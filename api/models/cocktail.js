import mongoose from 'mongoose';

const cocktailSchema = new mongoose.Schema({
  name: {
    type: String
  },
  ingredients: [{
    type: String
  }],
  method: [{
    type: String
  }],
  created_at: {
    type: Date,
    default: new Date()
  },
  updated_at: {
    type: Date,
    default: new Date()
  }
});

let model = mongoose.model('Cocktail', cocktailSchema);

export default class Cocktail {

  findAll(req, res) {
    model.find({}, (err, cocktails) => {
      if (err || !cocktails) {
        res.sendStatus(403);
      } else {
        res.json(cocktails);
      }
    });
  }

  findById(req, res) {
    model.find(req.params.id, (err, cocktails) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json(cocktails);
      }
    });
  }

  findByName(req, res) {
    model.find(req.params.name, (err, cocktails) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json(cocktails);
      }
    });
  }

  //
  // findByName(req, res) {
  //   model.find({
  //     id: req.params.name
  //   }, (err, cocktails) => {
  //     if (err) {
  //       res.status(500).send(err.message);
  //     } else {
  //       res.json(cocktails);
  //     }
  //   });
  // }

  create(req, res) {
        model.create(req.body,
            (err, cocktails) => {
                if (err || !cocktails) {
                    res.status(500).send(err.message);
                } else {
                    res.json(cocktails);
                }
            });
    }

}
