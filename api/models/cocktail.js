import mongoose from 'mongoose';

const cocktailSchema = new mongoose.Schema({

    name: {
        type: String
    },
    ingredients: [{
        type: String
    }],
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

        model.create({}, (err, cocktails) => {
            if (err || !cocktails) {
                res.sendStatus(403);
            } else {
                res.json(cocktails);
            }
        });
    }

    findById(req, res) {

        model.find({
            _id
        }, (err, cocktails) => {
            if (err || !cocktails) {
                res.sendStatus(403);
            } else {
                res.json(cocktails);
            }
        });
    }

    findByName(req, res) {

        model.find({
            _name
        }, (err, cocktails) => {
            if (err || !cocktails) {
                res.sendStatus(403);
            } else {
                res.json(cocktails);
            }
        });
    }

    findByIngredients(req, res) {

        model.find([{
            _ingredients
        }], (err, cocktails) => {
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

}
