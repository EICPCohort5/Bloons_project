var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    const games = ['Kingdom Hearts', 'Halo', 'Civilization'];
    res.json(games);
});

module.exports = router;