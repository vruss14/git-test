const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Question extends Model {}

Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.STRING,
    },
    A: {
        type: DataTypes.STRING,
    },
    B: {
        type: DataTypes.STRING,
    },
    C: {
        type: DataTypes.STRING,
    },
    D: {
        type: DataTypes.STRING,
    },
    correct: {
        type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Question',
  }
);

module.exports = Question;
