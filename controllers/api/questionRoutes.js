const router = require('express').Router();
const { Question } = require('../../models');

// GET one question from database

router.get('/:id', async (req, res) => {

  try {
    const questionData = await Question.findByPk(req.params.id, {});
    const question = questionData.get({ plain: true });
    res.status(200).json(question);

    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});

// GET all questions from database

router.get('/', async (req, res) => {

    try {
      const allQuestions = await Question.findAll({});
      res.status(200).json(allQuestions);
  
    } catch (err) {
          res.status(500).json(err);
          console.log(err)
    }
});


module.exports = router;
