

const db = require('../models');
const Needy = db.needy
const { ObjectId } = require('mongoose').Types;




// create a Donations
exports.create = (req, res, next) => {
    if (!req.body) {
        res.status(400).send({
            message: "do not ommit fields."
        });
        return;
    }
    const dn = new Needy(req.body);

    dn.save(dn)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the needy."
            });
        });
}


// find all Donations
exports.findAll = (req, res) => {
    Needy.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving needys."
            });
        });
}


// find one user 
exports.findOne = (req, res) => {
    const needy_id = req.params.id
    Needy.findOne({ '_id': new ObjectId(needy_id) })
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found needy with id " + needy_id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving needy with id=" + needy_id });
        });
}


// update a needy 
exports.update = (req, res) => {
    const updates = req.body
    const needy_id = req.params.id
    Needy.findOneAndUpdate({ '_id': new ObjectId(needy_id) }, { ...updates })
        .then(data => { res.send({ success: true}) })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error updating needy with id=" + needy_id });
        });
}