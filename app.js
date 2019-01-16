const express = require('express');

const app = express();

//Assets
app.use('/static', express.static('public'));

//Enable Pug Templating
app.set('view engine', 'pug');

//Declare Routes
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects')
app.use(mainRoutes);
app.use('/projects', projectRoutes);

app.listen(3000, () => {
	console.log("The application is running on localhost:3000");
});
