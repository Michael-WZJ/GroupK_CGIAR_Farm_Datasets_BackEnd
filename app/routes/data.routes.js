module.exports = app => {
  const express = require("express");
  const router = express.Router();
  const data = require("../controllers/data.controller.js");
  const { getDashboardData, getGroupingLists } = require("../data_generator/dashboard_controller");
  const { updateDashboard } = require("../data_generator/generator");


  // Define REST APIs
  router.get("/all_pages", data.getAllPages);

  router.get("/home", data.getAllHomePage);
  router.get("/home/gps", data.findGps);

  // Livelihood
  router.get("/livelihood", data.getAllLivelihoods);
  router.get("/livelihood/tva", data.findTVA);
  router.get("/livelihood/income_cat", data.findIncomeCat);
  router.get("/livelihood/annual_value", data.findAnnualValue);

  //food security
  router.get("/food_security", data.getAllFoodSecurity);
  router.get("/food_security/hfias", data.findHFIAS);
  router.get("/food_security/food_shortage", data.findFoodShortage);
  router.get("/food_security/hdds", data.findHDDS);
  router.get("/food_security/food_consumed", data.findFoodConsumed);

  //crops
  router.get("/crops", data.getAllCrops);
  router.get("/crops/land", data.findCropLand);
  router.get("/crops/cropGrown", data.findCropGrown);
  router.get("/crops/cropUsed", data.findCropUsed);
  router.get("/crops/cropYields", data.findCropYields);

  //livestock
  router.get("/livestock", data.getAllLivestock);
  router.get("/livestock/frequency", data.findLsFrequency);
  router.get("/livestock/heads", data.findLsHeads);
  router.get("/livestock/usages", data.findLsUsages);
  router.get("/livestock/breeds", data.findLsBreeds);

  //off farm
  router.get("/off_farm", data.getAllOffFarm);
  router.get("/off_farm/income", data.findOffFarmIncome);
  router.get("/off_farm/month", data.findOffFarmMonth);
  router.get("/off_farm/activity", data.findOffFarmActivity);
  router.get("/off_farm/usage", data.findOffFarmUsage);


  // Retrieve data by dataType
  router.get("/raw_data/:datatype", data.findRawDataByDataType);


  // Experimental dashboard api
  router.get("/dashboard/groupinglists", getGroupingLists);
  router.get("/dashboard", getDashboardData);
  router.get("/dashboard/update", updateDashboard);


  app.use("/api/data", router);
}
