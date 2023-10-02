module.exports = app => {
    const volunteer = require("../controllers/volunteering.controller.js");
    var router = require("express").Router();
    const cors = require("cors");

    
    router.get("/",cors({origin: "*"}), volunteer.findAll);
    router.post("/",cors({origin: "*"}), volunteer.create);
    router.get("/:id",cors({origin: "*"}), volunteer.findOne);
    router.put("/:id",cors({origin: "*"}), volunteer.update);
    app.use('/api/volunteering', router);
  };