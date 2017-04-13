import mongoose from 'mongoose';

const cocktailSchema = new mongoose.Schema({
  name: {
    type: String
  },
  ingredient: {
    type: [String]
  },
  method: {
    type: [String]
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
    default: Date.now
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

}
