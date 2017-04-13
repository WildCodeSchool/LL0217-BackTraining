import mongoose from 'mongoose';

const cocktailSchema = new mongoose.Schema({
  // Write schema here.


name: {
  type: String
},
ingredients: {
  type: String
},
method: {
  type: String
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



  create(req, res) {
          model.create(req.body, (err, cocktail) => {
              if (err) {
                  res.status(500).send(err.message);
              } else {
                  res.json({
                      success: true,
                      Listcocktail: cocktail
                  });
              }
          });
      }

      updateOne(req, res) {
      model.update({
          _id: req.params._id               // C'est ce que tu recherches =>  _id : req.params.id
      }, req.body, (err, cocktails) => {          // Les champs que tu modifies => req.body
          if (err) {
              res.status(500).send(err.message);
          } else {
                  res.sendStatus(200);
          }
      });
  }

      deleteOne(req, res) {
      model.findByIdAndRemove(req.params._id, (err) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.sendStatus(200);
        }
      });
    }

      findId(req, res) {
            model.find({_id/*_id correspond au schéma (mongoDB)*/: req.params._id/*._id correspond au /:ingredients*/}, (err,id) => {
              if (err) {
                  res.status(403);
              } else {
                  res.json(id);
              }
            });
          }

      findIngredients(req, res) {
            model.find({ingredients/*ingredients correspond au schéma*/: req.params.ingredients/*.ingredients correspond au /:ingredients*/}, (err,ingredients) => {
              if (err) {
                  res.status(403);
              } else {
                  res.json(ingredients);
              }
            });
          }

      findName(req, res) {
            model.find({name/*name correspond au schéma*/: req.params.name}, (err,cocktail) => {
              if (err) {
                  res.status(403);
              } else {
                  res.json(cocktail);
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
