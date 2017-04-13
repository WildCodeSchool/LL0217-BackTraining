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

    post(req, res) {

        model.create(req.body, (err, cocktails) => {
            if (err || !cocktails) {
                res.sendStatus(403);
            } else {
                res.json(cocktails);
            }
        });
    }

    findById(req, res) {

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

    findByIngredients(req, res) {

        model.findAll(req.params.name, [{}], (err, cocktails) => {
            if (err || !cocktails) {
                res.sendStatus(403);
            } else {
                res.json(cocktails);
            }
        });
    }

    put(req, res) {

        model.update({
            _id: req.params.id
        }, req.body, (err, cocktails) => {
            if (err || !cocktails) {
                res.sendStatus(403);
            } else {
                res.json(cocktails);
            }
        });
    }
    delete(req, res) {

        model.findByIdAndRemove(req.params.id, (err, cocktails) => {
            if (err || !cocktails) {
                res.sendStatus(403);
            } else {
                res.json(cocktails);
            }
        });
    }

}
