const express = require("express");
const { Router } = express;
const router = new Router();
const PointsOfInterest = require("../models").pointsOfInterest;

//Get the pointOfInterest by Id

router.get("/:id", async (request, response, next) => {
  try {
    const pointsOfInterestId = request.params.id;
    const thePointsOfInterest = await PointsOfInterest.findByPk(
      pointsOfInterestId
    );
    response.send(thePointsOfInterest);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
