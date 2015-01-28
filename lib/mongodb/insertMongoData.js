/* insert mongo data */


function InsertMongoData(mongodb) {
	return {
		insertBasicData: function insertBasicData(postData, callback) {
			console.log(mongodb);
			console.log("inserting: ",postData);

			mongodb.collection("testData")
			.insert(postData, {w:1}, function(err, result) {
				if (err) { return callback(err); }
				console.log("result: ", result);
				callback(null, result);
			});
		}
	};
};

module.exports = InsertMongoData;