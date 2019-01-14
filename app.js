const express = require('express');

const app = express();

app.set('view engine', 'pug');

/* Include static CSS and Assets*/
app.use('/css', express.static('css'));
app.use('/assets', express.static('assets'));
app.use('/js', express.static('js'));

app.get('/', (req, res) => {
	res.render('index.pug');
});

app.get('/projects', (req, res) => {
	res.render('projects.pug');
});

// Project pages //
app.get('/game', (req, res) => {
	res.render('game.pug');
})

app.get('/pendulums', (req, res) => {
	res.render('pendulums.pug')
})

app.get('/music', (req, res) => {
	res.render('music');
});

app.get('/resume', (req, res) => {
	res.render('resume');
});

app.get('/blog', (req, res) => {
	res.render('blog');
});

app.get('/archive', (req, res) => {
	res.render('archive');
})


app.listen(3000, () => {
	console.log("The application is running on localhost:3000");
});
