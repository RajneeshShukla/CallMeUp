module.exports = {

	index: function (req,res) {
		  res.send("the iamge : index controller " + req.params.image_id);
	},

	create : function(req,res){
		res.send("The iamge : create Post controller");
	},

	like :function(req,res){
		res.send("The iamge : like Post controller");	
	},

	comment:function(req,res){
			res.send("The iamge : Comment Post controller");
	}


};