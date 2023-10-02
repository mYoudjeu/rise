

const db = require('../models');
const Donation = db.donation
const {ObjectId}= require('mongoose').Types;




// create a Donations
exports.create = (req, res, next) => {
    if (!req.body) {
        res.status(400).send({
            message: "do not ommit fields."
        });
        return;
    }

    console.log(req.body);
    const dn = new Donation({
        name: req.body.name || "",
        email: req.body.email || "",
        type: req.body.type,
        purpose: req.body.purpose,
        anonymous: req.body.anonymous,
    });
    
    dn.save(dn)
    .then(data => {
        console.log(data);
        res.send(data);
    })
    .catch(err => {
        console.log(err.message);
        res.status(500).send({
            message:
                    err.message || "Some error occurred while creating the donation."
            });
        });
}


// find all Donations
exports.findAll = (req, res) => {
    Donation.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving donations."
            });
        });
}


// find one user 
exports.findOne = (req, res) => {
    const donation_id = req.params.id
    Donation.findOne({'_id': new ObjectId(donation_id)})
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found donation with id " + donation_id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving donation with id=" + donation_id });
        });
}


// update a needy 
exports.update = (req, res) => {
    const updates = req.body
    const donation_id = req.params.id
    Donation.findOneAndUpdate({ '_id': new ObjectId(donation_id) }, { ...updates })
        .then(data => { res.send({ success: true}) })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error updating donation with id=" + donation_id });
        });
}