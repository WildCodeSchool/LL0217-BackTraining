import mongoose from 'mongoose';

const cocktailSchema = new mongoose.Schema({
    name: String,
    ingredients: [String],
    method: [String],
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
        model.find({}, (err, cocktails) => {
            if (err || !cocktails) {
                res.sendStatus(403);
            } else {
                res.json(cocktails);
            }
        });
    }

    findOne(req, res) {
        model.findById(req.params.id, (err, cocktails) => {
            if (err || !cocktails) {
                res.sendStatus(403);
            } else {
                res.json(cocktails);
            }
        });
    }

    findByName(req, res) {
        model.find({
            name: req.params.name
        }, (err, cocktails) => {
            if (err || !cocktails) {
                res.sendStatus(403);
            } else {
                res.json(cocktails);
            }
        });
    }

    create(req, res) {
        model.create(req.body, (err, cocktails) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(cocktails);
            }
        });
    }

    update(req, res) {
      console.log(req.body.name);
        model.findByIdAndUpdate(req.params.id,req.body, (err, cocktail) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(cocktail);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err, cocktails) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(cocktails);
            }
        });
    }

}
