var express = require('express');
var router = express.Router();

router.get('/', (res, req) => {
    //const games = ['Kingdom Hearts', 'Halo', 'Civilization'];
    res.render('games', { title: 'Express' });
});

module.exports = router;