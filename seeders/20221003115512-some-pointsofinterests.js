"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("pointsOfInterests", [
      {
        name: "Winkel 43 - The famous Apple Pie",
        lat: 52.37909,
        lon: 4.88622,
        description:
          "Though there are many spots around the neighbourhood that serve tasty cakes and other confectionaries, it is always worth stopping by Winkel43 when in de Jordaan as this cosy café makes some of the finest apple pie in the entire city. The pie in question is served with thick dollops of whipped cream and has a smooth, almost crumbly crust which contains thick chunks of caramelised apple. There are many other dishes available at Winkel43 aside from its famous apple pie including light snacks and larger meals, that can be enjoyed inside the café’s charming bar area or outside on its street-side terrace.",
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/04/14/09/29/cake-1328547_1280.jpg",
        neighbourhoodId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Take a trip to Woonbootmuseum",
        lat: 52.37017,
        lon: 4.8826,
        description:
          "One of the more intriguing options for activity in Jordaan is to visit the Woonbootmuseum. This unique museum is actually located within a 1914 freighter converted into a houseboat. Climb aboard as the ship navigates Amsterdam’s seasoned canal system and absorb all of the mesmerizing history that comes with it. The only houseboat museum in the world, the Woonbootmuseum is reasonably priced and is located just five minutes’ walk from the Anne Frank House.",
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/08/19/16/09/canal-2659062_1280.jpg",
        neighbourhoodId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Anna Frank Museum",
        lat: 52.3752,
        lon: 4.88399,
        description:
          "Here Ana and her family lived hidden from the Nazi persecution (in an annex to the house with a secret access) from 1942 to 1945, until they were betrayed and sent to different concentration camps. Only the father of the family survived the holocaust and when he returned to Amsterdam he decided to make public the diary that Ana wrote during those years in the annex. During the visit you will walk through the hideout that is as it was at that time although without the furniture.",
        imageUrl:
          "https://cdn.pixabay.com/photo/2014/05/18/06/51/anne-frank-346861_1280.jpg",
        neighbourhoodId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Westerkerk",
        lat: 52.37453,
        lon: 4.8835,
        description:
          "This is the church that Anne Frank mentions in her diary and which is located right next to the building where the family hid. Westerkerk was built between 1620 and 1631. It was designed by Hendrick de Keyser and although it was not the first Protestant church in Amsterdam, it was the largest. What time is it? The interior of the church can be visited from Monday to Friday from 10 am to 3 pm.",
        imageUrl:
          "https://cdn.pixabay.com/photo/2019/09/14/13/49/amsterdam-4476104_1280.jpg",
        neighbourhoodId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Amstelkring Catholic Church",
        lat: 52.37263,
        lon: 4.89706,
        description:
          "You didn't expect to find one of the most curious churches in Amsterdam in the Red Light District, did you? Well Amstelkring has a fascinating history. It is a kind of clandestine church hidden in the last three floors of a house located on the canals. Dating back to 1660, this Catholic church was more or less secret for 200 years, when the country became Protestant by law and Catholics went into hiding. Also known as Our Lord in the Attic, you can see the place as it was, with its beautiful baroque altar and unexpected color scheme.",
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/01/14/13/05/cross-1979473_1280.jpg",
        neighbourhoodId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "The Bulldog The First Coffeeshop",
        lat: 52.37368,
        lon: 4.89768,
        description:
          "Coffeeshops are part of the Red Light District culture. They started appearing in the 1970s and are now synonymous with cannabis dispensaries. The Bulldog is one of the most famous in Amsterdam and also the first to open.",
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/01/03/13/35/netherlands-1119451_1280.jpg",
        neighbourhoodId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Condomerie",
        lat: 52.37368,
        lon: 4.89587,
        description:
          "Here there is a condom store called Condomerie, it is one of the most curious places to see in the red light district. All kinds of condoms are sold here, in all shapes and sizes. The store sells the most original condoms that can be found: condoms in the shape of animals, in the shape of some plants, in the shape of a monument. In addition to a wide range of flavored condoms and others that glow in the dark.",
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/11/30/12/29/bicycle-1872682_1280.jpg",
        neighbourhoodId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Red neon lights",
        lat: 52.37384,
        lon: 4.89892,
        description:
          "There is no doubt that the most striking of the Red Light District of Amsterdam are the famous showcases with red neon lights. These are located mainly in De Wallen and Warmoestraat, streets where prostitutes exhibit themselves encouraging passers-by to hire their services. They dress in a sexy and striking way and capture the eyes of the men and women who walk by. In these cubicles, there is a bed and a small bathroom. The curtains that cover the shop windows close when a client enters and open again when the girl is ready to continue working.",
        imageUrl:
          "https://cdn.pixabay.com/photo/2010/12/13/10/13/amsterdam-2551_1280.jpg",
        neighbourhoodId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pointsOfInterests", null, {});
  },
};
