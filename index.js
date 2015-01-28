/* Inital testing mongo */
var express = require("express");
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;

var GetMongoData = require("./lib/mongodb/getMongoData");
var InsertMongoData = require("./lib/mongodb/insertMongoData");

MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
	if (err) { req.error(err); }


	var getMongoData = new GetMongoData();
	var insertMongoData = new InsertMongoData(db);

	var app = express();
	app.set("port", process.env.PORT || 3000);

	app.use(bodyParser.json());

	app.get("/ping", function (req, res) {
		res.send("pong");
	});

	app.get("/mongo/data", function (req, res) {
		console.log("/mongo/data");
		getMongoData.getBasicData({}, function (err, result) {
			if(err) {
				res.error(err);
			}
			res.send(result);
		});
	});

	app.post("/mongo/data", function (req, res) {
		insertMongoData.insertBasicData(req.body, function (err, result) {
			if(err) {
				res.error(err);
			}
			res.send(result);
		});
	});

	app.listen(app.get("port"), function() {
		console.log("Server running on port " + app.get("port"));
	});



});
