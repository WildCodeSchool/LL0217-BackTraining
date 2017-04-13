import mongoose from 'mongoose';

const cocktailSchema = new mongoose.Schema({
    name: {
        type: String
    },
    ingredients: {
        type: [String]
    },
    method: {
        type: [String]
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

let model = mongoose.model('Cocktail', cocktailSchema);

export default class Cocktail {

  findAll(req, res) {
      model.find({},
          (err, cocktails) => {
              if (err || !cocktails) {
                  res.sendStatus(403);
              } else {
                  res.json(cocktails);
              }
          });
  }
  findAllId(req, res) {
      model.findById(req.params.id,
          (err, cocktails) => {
              if (err || !cocktails) {
                  res.sendStatus(403);
              } else {
                  res.json(cocktails);
              }
          });
  }
  findAllName(req, res) {
      model.find({
        name: req.params.name
      },
          (err, cocktails) => {
              if (err || !cocktails) {
                  res.sendStatus(403);
              } else {
                  res.json(cocktails);
              }
          });
  }
  findAllIngredient(req, res) {
    model.find({
        ingredients: {
            $all: req.params.ingredients.split('+')
        }
    },
          (err, cocktails) => {
              if (err || !cocktails) {
                  res.sendStatus(403);
              } else {
                  res.json(cocktails);
              }
          });
  }

    addCocktail(req, res){
      model.create(req.body,
        (err, cocktails) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json(cocktails);
            }
    });
  }


    edCocktail(req, res) {
        model.findOneAndUpdate(req.params.id, req.body,
            (err, cocktails) => {
                if (err || !cocktails) {
                    res.status(500).send(err.message);
                } else {
                    res.json(cocktails);
                }
            });
    }

    delCocktail(req, res) {
      model.findByIdAndRemove(req.params.id,
        (err) => {
          if (err) {
            res.status(500).send(err.message);
          } else {
            res.sendStatus(200);
          }
      });
    }


}
