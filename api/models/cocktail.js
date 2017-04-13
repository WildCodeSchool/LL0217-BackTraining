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

  // findRandom(req, res) {
  //   model.find({
  //     _id: req.params.id
  //   }, (err, cocktails) => {
  //     if (err) {
  //       res.status(500).send(err.message);
  //     } else {
  //       res.json(cocktails);
  //     }
  //   });
  // }

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
    model.findById(req.params.id, (err, cocktails) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json(cocktails);
      }
    });
  }

  findByName(req, res) {
    model.find({
      name: req.params.name
    }, (err, cocktails) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json(cocktails);
      }
    });
  }

  findByIngredients(req, res) {
    model.find({
      ingredients: req.params.ingredients
    }, (err, cocktails) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json(cocktails);
      }
    });
  }

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

  delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        });
  }

  // put(req, res) {
  //       model.update({_id: req.params.id}, req.body,
  //           (err, cocktails) => {
  //               if (err) {
  //                   res.status(500).send(err.message);
  //               } else {
  //                   res.json(cocktails);
  //               }
  //           });
  // }

  editCocktail(req, res) {
        model.findByIdAndUpdate(req.params.id, req.body,
            (err, cocktail) => {
                if (err) {
                    res.status(500);
                } else if (!cocktail){
                    res.status(404);
                } else {
                    res.json(cocktail);
                }
            });
  }

}
