import mongoose from 'mongoose';

const cocktailSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: true
    },
    "ingredients": [{
        "name": {
            type: String,
            required: true
        },
        "quantity": {
            type: String,
            required: true
        }
    }],
    "method": [{
        "type": String
    }],
    "created_at": {
        type: Date,
        default: Date.now
    },
    "updated_at": {
        type: Date
    }
});

let model = mongoose.model('Cocktail', cocktailSchema);

export default class Cocktail {

    findAll(req, res) {
        model.find({}, (err, cocktails) => {
            if (err || !cocktails) {
                res.status(403).send({
                    err
                });
            } else {
                res.json(cocktails);
            }
        });
    }


    findById(req, res) {
        model.findById(req.params.id, (err, cocktail) => {
            if (err) {
                res.status(403).send({
                    err
                });
            } else {
                if (!cocktail) {
                    res.sendStatus(404);
                } else {
                    res.json(cocktail);
                }
            }
        });
    }

    findByName(req, res) {
        model.find({
            name: req.params.name
        }, (err, cocktails) => {
            if (err || !cocktails) {
                res.status(403).send({
                    err
                });
            } else {
                res.json(cocktails);
            }
        });
    }

    findByIngredients(req, res) {
        let ingredients = req.params.ingredients.split(',').map(name => name.trim());
        model.find({
            "ingredients.name": {
                $all: ingredients
            }
        }, (err, cocktails) => {
            if (err || !cocktails) {
                res.status(403).send({
                    err
                });
            } else {
                res.json(cocktails);
            }
        });
    }

    create(req, res) {
        model.create(req.body, (err, cocktail) => {
            if (err || !cocktail) {
                res.status(403).send({
                    err
                });
            } else {
                res.status(201).json({
                    "success": true,
                    "cocktail": cocktail
                });
            }
        });
    }
}
