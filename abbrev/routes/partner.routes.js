module.exports = app => {
  const partner = require("../controllers/partner.controller.js");
  var router = require("express").Router();
  const cors = require("cors");

  
  router.get("/",cors({origin: "*"}), partner.findAll);
  router.post("/",cors({origin: "*"}), partner.create);
  router.get("/:id",cors({origin: "*"}), partner.findOne);
  router.put("/:id",cors({origin: "*"}), partner.update);
  app.use('/api/partner', router);
};