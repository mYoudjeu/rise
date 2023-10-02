

const db = require('../models');
const Partner = db.partner
const { ObjectId } = require('mongoose').Types;




exports.create = (req, res) => {
    console.log(req.body);
    if (!req.body) {
        res.status(400).send({
            message: "do not ommit fields."
        });
        return;
    }
    const dn = new Partner({...req.body, accepted: false});

    dn.save(dn)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the partner."
            });
        });
}


exports.findAll = (req, res) => {
    console.log('getting data');

  Partner.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving partner."
            });
        });
}


exports.findOne = (req, res) => {
    console.log(req);

    const partner_id = req.params.id
    Partner.findOne({ '_id': new ObjectId(partner_id) })
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found partner with id " + partner_id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving partner with id=" + partner_id });
        });
}


exports.update = (req, res) => {
    console.log(req.body);

    const updates = req.body
    const partner_id = req.params.id
    Partner.findOneAndUpdate({ '_id': new ObjectId(partner_id) }, { ...updates })
        .then(data => { res.send({ success: true}) })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error updating partner with id=" + partner_id });
        });
}