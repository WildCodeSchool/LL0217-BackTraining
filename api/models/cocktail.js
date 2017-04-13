import mongoose from 'mongoose';

const cocktailSchema = new mongoose.Schema({
    name: {
        type: String,
        default: '',
        required: true
    },
    ingredients: {
        type: Array,

    },
    method: {
        type: Array,

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
                res.sendStatus(500);
            } else {
                res.json(cocktails);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, {
            password: 0
        }, (err, cocktail) => {
            if (err || !cocktail) {
                res.sendStatus(500);
            } else {
                res.json(cocktail);
            }
        });
    }

    findByName(req, res) {
        model.find({name: req.params.name}, (err, cocktail) => {
            if (err || !cocktail) {
                res.sendStatus(500);
            } else {
                res.json(cocktail);
            }
        });
    }

    findByIngredients(req, res) {
        model.find({ingredients: req.params.ingredients}, (err, cocktail) => {
            if (err || !cocktail) {
                res.sendStatus(500);
            } else {
                res.json(cocktail);
            }
        });
    }

    create(req, res) {
        model.create(req.body,
            (err, cocktail) => {
                if (err || !cocktail) {
                    res.status(500).send(err.message);
                } else {
                    res.json({
                        success: true,
                        cocktail
                    });
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, req.body, (err, cocktail) => {
            if (err || !cocktail) {
                res.status(500).send(err.message);
            } else {
                res.json({
                    success: true,
                    cocktail: Cocktail,
                });
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
