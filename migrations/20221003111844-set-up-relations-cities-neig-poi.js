"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("neighbourhoods", "cityId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cities",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("pointsOfInterests", "neighbourhoodId", {
      type: Sequelize.INTEGER,
      references: {
        model: "neighbourhoods",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("neighbourhoods", "cityId");
    await queryInterface.removeColumn("pointsOfInterests", "neighbourhoodId");
  },
};
