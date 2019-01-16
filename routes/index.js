const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index.pug');
});

router.get('/music', (req, res) => {
	res.render('music');
});

router.get('/resume', (req, res) => {
	res.render('resume');
});

router.get('/blog', (req, res) => {
	res.render('blog');
});

router.get('/archive', (req, res) => {
	res.render('archive');
})

module.exports = router;
