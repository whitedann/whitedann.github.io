const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

//GET root
//Renders homepage
router.get('/', (req, res) => {
	res.render('index.pug');
});

//GET /music
//Renders music page
router.get('/music', (req, res) => {
	res.render('music');
});

//GET /resume
//Renders resume page
router.get('/resume', (req, res) => {
	res.render('resume');
});

//GET /resume/danielwhite.pdf
//Renders resume PDF in browser
router.get('/resume/DanielWhite\'sResume.pdf', (req, res) => {
	const resuPath = "assets/DanielWhitesResume.pdf";
	res.sendFile(path.join(__dirname, '../public/assets/DanielWhite\'sResume.pdf'))
});

//GET /resume
//Renders blog page
router.get('/blog', (req, res) => {
	res.render('blog');
});

//GET /resume
//Renders archive page
router.get('/archive', (req, res) => {
	res.render('archive');
})

module.exports = router;
