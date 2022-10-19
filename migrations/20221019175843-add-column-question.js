"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "neighbourhoods",
      "question",
      { type: Sequelize.TEXT, allowNull: false },
      {}
    );

    await queryInterface.addColumn(
      "pointsOfInterests",
      "question",
      { type: Sequelize.TEXT, allowNull: false },
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("neighbourhoods", "question", {});
    await queryInterface.removeColumn("pointsOfInterests", "question", {});
  },
};
