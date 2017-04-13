import mongoose from 'mongoose';

const cocktailSchema = new mongoose.Schema({
    name: {
        type: String
    },
    ingredients: {
        type: String
    },
    method: {
        type: String
    },
    create_at: {
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

    create(req, res) {
        model.create(req.body, (err, cocktail) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json({
                    success: true,
                    Listcocktails: cocktail
                });
            }
        });
    }

    findName(req, res) {
        model.findOne(req.params.name, (err) => {
          if (err) {
              res.sendStatus(500);
          } else {
              res.json({
                  success: true,
                  CocktailName: cocktail.name
              });
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
