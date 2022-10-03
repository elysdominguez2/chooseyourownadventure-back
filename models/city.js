"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class city extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      city.hasMany(models.neigbourhood);
    }
  }
  city.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      lat: { type: DataTypes.FLOAT, allowNull: false },
      lon: { type: DataTypes.FLOAT, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "city",
    }
  );
  return city;
};
