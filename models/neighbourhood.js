"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class neighbourhood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      neighbourhood.belongsTo(models.city, { foreignKey: "cityId" });
      neighbourhood.hasMany(models.pointsOfInterest);
    }
  }
  neighbourhood.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      lat: { type: DataTypes.FLOAT, allowNull: false },
      lon: { type: DataTypes.FLOAT, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      question: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      modelName: "neighbourhood",
    }
  );
  return neighbourhood;
};
