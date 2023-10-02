const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;


db.partner = require("./partner.model.js")(mongoose);
db.volunteering = require("./volunteering.model.js")(mongoose);
db.donation = require("./donation.model.js")(mongoose);
db.needy = require("./needy.model.js")(mongoose);

module.exports = db;