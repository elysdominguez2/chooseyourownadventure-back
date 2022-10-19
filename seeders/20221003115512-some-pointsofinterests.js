"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("pointsOfInterests", [
      //From JORDAAN
      {
        name: "Winkel 43 - The famous Apple Pie",
        lat: 52.37909,
        lon: 4.88622,
        description:
          "Though there are many spots around the neighbourhood that serve tasty cakes and other confectionaries, it is always worth stopping by Winkel43 when in de Jordaan as this cosy café makes some of the finest apple pie in the entire city. The pie in question is served with thick dollops of whipped cream and has a smooth, almost crumbly crust which contains thick chunks of caramelised apple. There are many other dishes available at Winkel43 aside from its famous apple pie including light snacks and larger meals, that can be enjoyed inside the café’s charming bar area or outside on its street-side terrace.",
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/04/14/09/29/cake-1328547_1280.jpg",
        neighbourhoodId: 1,
        question:
          "Do you want to take your friends to try the best apple pie in the world?",
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
        question:
          "You may want to experience what it is like to live in a boat house",
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
        question:
          "Can you imagine what it is like to live for two years in a small house behind walls hidden from everyone? Here you can",
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
        question: "Is architecture for you? Look at this huge church from 1600",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //From RED LIGHTS
      {
        name: "Amstelkring Catholic Church",
        lat: 52.37263,
        lon: 4.89706,
        description:
          "You didn't expect to find one of the most curious churches in Amsterdam in the Red Light District, did you? Well Amstelkring has a fascinating history. It is a kind of clandestine church hidden in the last three floors of a house located on the canals. Dating back to 1660, this Catholic church was more or less secret for 200 years, when the country became Protestant by law and Catholics went into hiding. Also known as Our Lord in the Attic, you can see the place as it was, with its beautiful baroque altar and unexpected color scheme.",
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/01/14/13/05/cross-1979473_1280.jpg",
        neighbourhoodId: 2,
        question:
          "Are you curious? There is a hidden church near here, can you find it?",
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
        question: "Where were the Coffeeshops born?",
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
        question: "How many types of condoms can you count here?",
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
        question:
          "What do you think when you think of Amsterdam? Perhaps here is your answer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //From EL RAVAL
      {
        name: "The monastery of San Pablo del Campo",
        lat: 41.37702,
        lon: 2.16947,
        description:
          "The monastery of San Pablo del Campo is an old Benedictine monastery located in the El Raval neighborhood of the Spanish city of Barcelona, where it is one of the best preserved Romanesque buildings.",
        imageUrl:
          "https://images.unsplash.com/photo-1617733743703-6d13c8078325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
        neighbourhoodId: 3,
        question: "Here you can transport yourself to another era",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Palau Güell",
        lat: 41.37958,
        lon: 2.17428,
        description:
          "Palau Güell was Antoni Gaudí's first commission from Eusebi Güell in 1885. It is a city mansion full of every conceivable kind of luxury and located in one of the most popular, and most run-down, districts of Barcelona at the time: the Raval district.",
        imageUrl:
          "https://images.unsplash.com/photo-1456132311779-ca4ff6130510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
        neighbourhoodId: 3,
        question: "Do you want to follow in the footsteps of Gaudi?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gran Teatro del Liceo",
        lat: 41.381,
        lon: 2.17322,
        description:
          "The Gran Teatro del Liceo de Barcelona, known as El Liceo, is the oldest and most prestigious active theater in Barcelona, especially as an opera house, among which it is considered one of the most important in the world.",
        imageUrl:
          "https://images.unsplash.com/photo-1615414047026-802692414b79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
        neighbourhoodId: 3,
        question: "This is not a simple theater",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mercado La Boquería",
        lat: 41.38234,
        lon: 2.1717,
        description:
          "La Boquería is a famous market that provides a wide variety of fresh fruits, vegetables, nuts and seeds, sweets, as well as meat, fish, cheese and dairy products. However, even if you don't want to buy anything at the market, it's worth a visit to soak up the atmosphere and the burst of color from the fresh fruit on the stalls.",
        imageUrl:
          "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        neighbourhoodId: 3,
        question: "Are you hungry? This is a must stop",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //From El POBLE-SEC
      {
        name: "The magic fountain",
        lat: 41.36799,
        lon: 2.16881,
        description:
          "The Magic Fountain has been, and still is, an important part of some of the biggest events in the city's recent history, including the 1992 Olympic Games and the annual La Mercè pyrotechnic musical show, which combines the fountain's choreographies with a fireworks display. This attracts large crowds of local residents and people from all over the world to Avinguda de la Reina Maria Cristina.",
        imageUrl:
          "https://images.unsplash.com/photo-1607873894099-eee7896bab03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
        neighbourhoodId: 4,
        question: "Do you have coins in your pockets? let's make wishes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Museu Nacional d'Art de Catalunya",
        lat: 41.37058,
        lon: 2.157549,
        description:
          "This museum is also known by its acronym MNAC. It stands out for its collection of Romanesque art, considered one of the most complete in the world. It contains hundreds of pieces from medieval times to the 19th century.",
        imageUrl:
          "https://images.unsplash.com/photo-1567544668986-dbf98eb544fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        neighbourhoodId: 4,
        question: "Are you lovers of romantic art? find out here",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Miró Museum",
        lat: 41.36914,
        lon: 2.16,
        description:
          "The Joan Miró Foundation is a cultural institution that guards some of the most representative works of the Catalan painter Joan Miró. A place to experience his art  and other twentieth and twenty-first century artists, a space for participation and dialogue. It contains more than 104,000 pieces including paintings, sculptures and tapestries.",
        imageUrl:
          "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
        neighbourhoodId: 4,
        question: "Perhaps you prefer modern art",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Montjuïc Castle",
        lat: 41.36914,
        lon: 2.16506,
        description:
          "Situated at the highest point of the Montjuic Mountain, you will be able to enjoy impressive views of Barcelona, both of the coastline and other points in the city, which makes it one of the most spectacular viewpoints in Barcelona. Montjuic Castle dates from the s. XVII and was built on a strategic high point near the sea. The castle is an old military fortress. ",
        imageUrl:
          "https://images.unsplash.com/photo-1565172700745-f8bcdffb82dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        neighbourhoodId: 4,
        question: "Would you like to have incredible views of the entire city?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Botanical Garden",
        lat: 41.36784,
        lon: 2.15833,
        description:
          "Jardins de Mossèn Costa i Llobera is a cactus garden that gives off a very special energy; the paths zigzag up Montjuïc and there are beautiful views of the sea below. You can also walk through the rose gardens of Jardins del Teatre Grec and take a seat on the large stairs of the Teatre Grec, an open-air theater that puts on plays during the summer. Another enjoyable walk is though Laribal Gardens, where it feels like you’re in Italy with the trees and fountains.",
        imageUrl:
          "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
        neighbourhoodId: 4,
        question: "Is nature your thing? Get lost in these beautiful gardens",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pointsOfInterests", null, {});
  },
};
