const { DataTypes } = require("sequelize");
const db = require("./../db/dbconnect");

const Blague = db.define("Blague", {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Blague;
