import mongoose from 'mongoose';

const cocktailSchema = new mongoose.Schema({


name: {
  type: String
},
ingredients: {
  type: String
},
methode: {
  type: String
},
create_at: {
  type: Date, default: Date.now
},
update_at: {
  type: Date, default: Date.now
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

  create(req, res){
    model.create(req.body, (err,cocktail) => {
      if (err){
        res.status(500).send(err.message);
      } else {
        res.json({
          recettes: cocktail
        });
      }

    });

    }
findById(req, res){
  model.findById({_id: req.params.id}, (err, id)/*parametre d'erreur, et parametre de reponse*/ => {
    if (err || !id) {
      res.sendStatus(500);
    } else {
      res.json(id);
    }});
    }

    findByName(req, res){
      model.find({name: req.params.name} ,(err, name)=> {
        if (err || !name) {
          res.sendStatus(500);
        } else {
          res.json(name);
        }
      });
  }
    updateOne(req, res){
      model.update({_id:req.params.id
      },req.body, (err, cocktails) =>{
        if (err || !cocktails) {
          res.status(500).send(err.message);
        }else {res.sendStatus(200);
        }
      }
    );
    }
    findByMethode(req, res){
      model.find({methode:req.params.methode
      } ,(err, methode)=> {
        if (err || !methode) {
          res.sendStatus(500);
        } else {
          res.json(methode);
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


}
