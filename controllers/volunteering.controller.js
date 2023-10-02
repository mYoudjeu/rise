

const db = require('../models');
const Volunteering = db.volunteering
const { ObjectId } = require('mongoose').Types;




exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "do not ommit fields."
        });
        return;
    }
    const dn = new Volunteering(req.body);

    dn.save(dn)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the volunteer."
            });
        });
}


exports.findAll = (req, res) => {
    Volunteering.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving volonteers."
            });
        });
}


exports.findOne = (req, res) => {
    const volunteer_id = req.params.id
    Volunteering.findOne({ '_id': new ObjectId(volunteer_id) })
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found volunteer with id " + volunteer_id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving volunteer with id=" + volunteer_id });
        });
}


exports.update = (req, res) => {
    const updates = req.body
    const volunteer_id = req.params.id
    Volunteering.findOneAndUpdate({ '_id': new ObjectId(volunteer_id) }, { ...updates })
        .then(data => { res.send({ success: true}) })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error updating volunteer with id=" + volunteer_id });
        });
}