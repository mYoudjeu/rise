module.exports = app => {
    const neeedy = require("../controllers/needy.controller.js");
    var router = require("express").Router();
    const cors = require("cors");

    
    router.get("/",cors({origin: "*"}), neeedy.findAll);
    router.post("/",cors({origin: "*"}), neeedy.create);
    router.get("/:id",cors({origin: "*"}), neeedy.findOne);
    router.put("/:id",cors({origin: "*"}), neeedy.update);
    app.use('/api/needy', router);
  };