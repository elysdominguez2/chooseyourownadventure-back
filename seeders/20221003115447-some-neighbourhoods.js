"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("neighbourhoods", [
      //AMSTERDAM
      {
        name: "Jordaan",
        lat: 52.38078,
        lon: 4.88742,
        description:
          "Jordaan was for many centuries one of the poorest neighborhoods in Amsterdam. Today it has become one of the coolest and most fashionable neighborhoods in the city, this is shocking. Its limits extend from the Brouwersgracht canal to Leidsegracht and from Prinsengracht to Singelgracht. It is a neighborhood that breathes art and music through its small streets. You can find curious shops, a large number of bars and restaurants. Here you can feel like a local in one of its markets and get excited when visiting the Anne Frank house. Let's go?",
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/08/23/10/40/canal-2672294_1280.jpg",
        cityId: 1,
        question:
          "You can go to Jordaan, the coolest neighbourhood in the city",
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
        question:
          "Or you can go to see the famous Red Light district and discover why Amsterdam is so unique",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //BARCELONA
      {
        name: "El Raval",
        lat: 41.380959,
        lon: 2.16672,
        description:
          "El Raval is a vibrant area that boasts cutting-edge exhibits at the Barcelona Museum of Contemporary Art and the Center de Cultura Contemporània de Barcelona. The adjacent streets are full of bohemian bars, trendy designer shops and street art. Seafood, wine and tapas are sold at La Boquería market located on La Rambla avenue, while laid-back cafes line the Rambla del Raval.",
        imageUrl:
          "https://images.unsplash.com/photo-1512920186713-b2539975097a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        cityId: 2,
        question:
          "You can choose, do you want to visit the vibrant and cultural neighbourhood of El Raval?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "El Poble-sec",
        lat: 41.374619,
        lon: 2.14903,
        description:
          "Poble-Sec is a compact district with shady plazas and elegant 19th-century architecture. Carrer de Blai is known for its creative tapas bars and lively bars, while the theater area of Avenida Paral lel is packed with old-school theatres, offering musical and cabaret shows. Away from the hustle and bustle, residents gather at outdoor cafes around charming squares like Plaça de las Navas and Plaça del Sortidor. Now you are in The Plaza de España, it is one of the most emblematic spaces in the Catalan capital. It was built during the International Exhibition of 1929. With 34,000 m² it is the second largest square in Spain, after the Plaza de España in Madrid.",
        imageUrl:
          "https://images.unsplash.com/photo-1589708532758-ddd0753b0f2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        cityId: 2,
        question:
          "Or do you prefer nature and incredible views of the city from above?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("neighbourhoods", null, {});
  },
};
