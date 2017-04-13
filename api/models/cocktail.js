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
          (err, comments) => {
              if (err || !comments) {
                  res.sendStatus(403);
              } else {
                  res.json(comments);
              }
          });
  }

//     findAdd(req, res) {
//         model.find({
//           name: req.params.name
//         })
//         .exec(
//            (err, cocktails) => {
//             if (err || !cocktails) {
//                 res.sendStatus(403);
//             } else {
//                 res.json(cocktails);
//             }
//         });
// }
    addCocktail(req, res){
      model.create(req.body,
        (err, comment) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json(comment);
            }
    });
  }


}
