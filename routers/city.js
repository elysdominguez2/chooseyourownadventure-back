const express = require("express");
const { Router } = express;
const router = new Router();
const City = require("../models").city;

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

module.exports = router;
