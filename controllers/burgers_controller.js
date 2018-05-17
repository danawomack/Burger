var burgers = require("../models/burger.js");
var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
	
	burger.selectAll(function(data){
		var handbObject ={
			burgers: data
		};
		
		res.render("index", handbObject);
	});
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne('burger_name', req.body.burger_name, function() {
   
    res.redirect('/');
  });
});

router.put("/api/burgers/:id", function(req, res){

	var condition = "id = " + req.params.id;
	burger.updateOne({
		devoured: req.body.devoured
	}, condition, function(){
		res.redirect('/')
	});
});




module.exports = router;
