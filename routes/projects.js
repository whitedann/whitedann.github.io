const express = require('express');
const router = express.Router();

router.use('/static', express.static('public'));

router.get('/', (req, res) => {
	res.render('projects.pug');
});

router.get('/game', (req, res) => {
	res.render('game.pug');
})

router.get('/pendulums', (req, res) => {
	res.render('pendulums.pug');
})

router.get('/gps', (req, res) => {
	res.render('gps.pug');
})

router.get('/radio', (req, res) => {
	res.render('radio.pug');
})


module.exports = router;
