const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/dbconnect");

const Blague = sequelize.define(
  "Blague",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reponse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Blagues",
  }
);

module.exports = Blague;
