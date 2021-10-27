const sequelize = require('../config/connection');
const { Question } = require('../models');

const questionData = require('./questionData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const questions = await Question.bulkCreate(questionData, {
    individualHooks: true,
    returning: true,
  });

  for (const question of questionData) {
    await Question.create({
      ...question,
      question_id: questions[Math.floor(Math.random() * questions.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();