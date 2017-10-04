var express = require('express');
var config = require('./server/configure');

app = express();

//define port
app.set('port',process.env.PORT||3000);

//define views directory
app.set('views',__dirname+'/views');

//pass the appreference to config file
app = config(app); 

app.get('/',function(req,res){
	res.send('Hello World');
});

//listen app
app.listen(app.get('port'), function(){
	console.log("Server is up on port "+ app.get('port'));
})