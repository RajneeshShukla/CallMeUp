var path  = require('path');
var routes = require('./routes');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var express = require('express');

//Initialize the parameter
module.exports = function(app){
	app.use(bodyParser.urlencoded({'extended':true}));
	app.use(bodyParser({
		 uploadDir:path.join(__dirname,'public/upload/temp')
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.use(cookieParser(' secreat here'));  //write your secreate key here
	routes(app);  //movinng the routes to routes folder
	app.use('/public/', express.static(path.join(__dirname , '../public')));

	if('development' === app.get('env')){
		app.use(errorHandler());
	}

	app.engine('handlebars' , exphbs.create({
		defaultLayout :'index',
		layoutsDir: app.get('views')+ '/layouts',
		partialsDir : [app.get('views')+ '/partials']
	}).engine);
	//set the view engine handlebar
	app.set('view engine' ,'handlebars');

	return app;
};



