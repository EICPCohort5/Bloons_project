var express = require('express');
var router = express.Router();
const { Games } = require('../orm/models');

// GET /books/ -> [ array of books ]
router.get('/', async (req, res) => {
  try {
    let games = await Games.findAll();
    res.json(games);
  } catch (error) {
    res.status(500).send('Game fetching failed');
  }
});

// GET /books/:id -> matching book or 404
router.get('/:id', async (req, res) => {
  try {
    let game = await Games.findByPk(req.params.id);
    if (game) {
      res.json(game);
    } else {
      res.status(404).send(`Could not find game for id ${req.params.id}`);
    }
  } catch (error) {
    res.status(500).send('Game fetching failed');
  }
});

// Step 2, specifically answering on '/'
// POST /books -> add a book
router.post('/', async (req, res) => {
  let protoGame = req.body;

  try {
    // Security alert: not validating inputs!
    // Steps 3-7 are right here, due to the configuration of Sequelize
    // You can also look at orm/books/books-connection and orm/books/Book.js
    let model = await Games.create(protoGame);

    // Step 8
    res.status(201).json(model);
  } catch (error) {
    res.status(500).send('Game fetching failed');
  }
});

module.exports = router;
