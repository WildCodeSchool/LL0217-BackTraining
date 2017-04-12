import mongoose from 'mongoose';

const cocktailSchema = new mongoose.Schema({
  // Write schema here.
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

}
