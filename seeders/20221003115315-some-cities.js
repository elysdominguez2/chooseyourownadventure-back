"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("cities", [
      {
        //Central Station Amsterdam
        name: "Amsterdam",
        lat: 52.37787,
        lon: 4.89961,
        description:
          "You choose the beatutiful, unique and complicated Amsterdam. Welcome!",
        imageUrl:
          "https://cdn.pixabay.com/photo/2019/03/09/22/43/amsterdam-4045137_1280.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        //La Rambla Barcelona
        name: "Barcelona",
        lat: 41.375011,
        lon: 2.17003,
        description: "You choose the artistic and eclectic Barcelona. Welcome!",
        imageUrl:
          "https://cdn.pixabay.com/photo/2014/04/26/10/02/parc-guell-332390_1280.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        //Trafalger Square London"
        name: "London",
        lat: 51.508119,
        lon: -0.128049,
        description: "You choose the elegant and modern London. Welcome!",
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/06/11/18/03/big-ben-2393098_1280.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        //NotreDame Paris
        name: "Paris",
        lat: 48.853851,
        lon: 2.34805,
        description: "You choose the romantic and magical Paris. Welcome!",
        imageUrl:
          "https://cdn.pixabay.com/photo/2019/03/09/22/43/amsterdam-4045137_1280.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        //Piazza Venezia Rome
        name: "Rome",
        lat: 41.895721,
        lon: 12.48229,
        description: "You choose the antique and friendly Rome. Welcome!",
        imageUrl:
          "https://cdn.pixabay.com/photo/2019/10/06/08/57/tiber-river-4529605_1280.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cities", null, {});
  },
};
