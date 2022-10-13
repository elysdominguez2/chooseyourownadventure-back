const express = require("express");
const { Router } = express;
const router = new Router();
const City = require("../models").city;
const Neighbourhood = require("../models").neighbourhood;
const PointsOfInterest = require("../models").pointsOfInterest;
//GET all the cities

router.get("/", async (request, response, next) => {
  try {
    const cities = await City.findAll({
      order: [["name", "ASC"]],
    });

    response.send(cities);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//Get the city by Id

router.get("/:id", async (request, response, next) => {
  try {
    const cityId = request.params.id;
    const theCity = await City.findByPk(cityId, {
      include: [{ model: Neighbourhood, include: { model: PointsOfInterest } }],
    });
    response.send(theCity);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
