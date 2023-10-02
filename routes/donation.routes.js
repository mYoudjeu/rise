module.exports = app => {
    const donation = require("../controllers/donation.controller.js");
    var router = require("express").Router();
    const cors = require("cors");

    
    router.get("/",cors({origin: "*"}), donation.findAll);
    router.post("/",cors({origin: "*"}), donation.create);
    router.get("/:id",cors({origin: "*"}), donation.findOne);
    router.put("/:id",cors({origin: "*"}), donation.update);
    app.use('/api/donations', router);
  };