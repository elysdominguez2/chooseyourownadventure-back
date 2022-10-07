const express = require("express");
const { Router } = express;
const router = new Router();
const Neighbourhood = require("../models").neighbourhood;

//Get the city by Id

router.get("/:id", async (request, response, next) => {
  try {
    const neighbourhoodId = request.params.id;
    const theNeighbourhood = await Neighbourhood.findByPk(neighbourhoodId);
    response.send(theNeighbourhood);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
