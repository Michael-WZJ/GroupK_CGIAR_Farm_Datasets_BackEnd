const data = require("../controllers/data.controller");
module.exports = app => {
  const express = require("express");
  const router = express.Router();
  const data = require("../controllers/data.controller.js");
  
  // Define REST APIs
  // Retrieve data by dataType
  router.get("/raw_data/:datatype", data.findRawDataByDataType);

  router.get("/all_pages",);

  router.get("/livelihoods", data.getAllLivelihoods);

  router.get("/food_security", data.getAllFoodSecurity);
  router.get("/food_security/hfias", data.findHFIAS);
  router.get("/food_security/food_shortage", data.findFoodShortage);
  router.get("/food_security/hdds", data.findHDDS);
  router.get("/food_security/food_consumed", data.findFoodConsumed);

  router.get("/livestock", data.getAllLivestock);


  app.use("/api/data", router);
}
