var express = require('express');
var router = express.Router();
var home =  require('../controllers/home');
var image = require('../controllers/image');

//export
module.exports = function(app){
	router.get('/', home.index);
	router.post('/images', image.create);   //thispath is not workinng now // check it letter
	router.get('/images/:image_id', image.index );
	router.post('/images/:image_id/like', image.like );
	router.post('/images/:image_id/comment', image.comment );
	app.use(router);	
};