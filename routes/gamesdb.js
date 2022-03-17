var express = require('express');
var router = express.Router();
const { Games, Platform, Publisher, GamesPlatforms } = require('../orm/models');

// GET /games
router.get('/', async (req, res) => {
  try {
    let games = await Games.findAll(
      {include: {model: Publisher, as: 'publisher'}}
    );
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).send('Game fetching failed');
  }
});

// GET /games/:id -> matching game or 404
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
