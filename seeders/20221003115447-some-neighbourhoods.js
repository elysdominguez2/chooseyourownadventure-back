"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("neighbourhoods", [
      {
        name: "Jordaan",
        lat: 52.38078,
        lon: 4.88742,
        description:
          "Jordaan was for many centuries one of the poorest neighborhoods in Amsterdam. Today it has become one of the coolest and most fashionable neighborhoods in the city, this is shocking. Its limits extend from the Brouwersgracht canal to Leidsegracht and from Prinsengracht to Singelgracht. It is a neighborhood that breathes art and music through its small streets. You can find curious shops, a large number of bars and restaurants. Here you can feel like a local in one of its markets and get excited when visiting the Anne Frank house. Let's go?",
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/08/23/10/40/canal-2672294_1280.jpg",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Red Lights District",
        lat: 52.374119,
        lon: 4.89776,
        description:
          "De Wallen is the medieval center of the city, with canals and narrow alleys lined with traditional bars. The Oude Kerk, a centuries-old former church that hosts cultural events, is surrounded by the red light district in neon lights. Likewise, Beurs van Berlage, the former stock exchange built with red bricks, now hosts exhibitions and concerts. Let's go?",
        imageUrl:
          "https://cdn.pixabay.com/photo/2018/04/05/08/55/red-light-district-3292225_1280.jpg",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("neighbourhoods", null, {});
  },
};
