/* mongo db test1 */

var MongoClient = require("mongodb").MongoClient;

function GetMongoData() {
	return {
		getBasicData: function (options, callback) {

			MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
				if (err) { return callback(err); }

				db
				.collection("testData")
				.find()
				.toArray(function (err, docs) {
					if (err) { return callback(err); }
					console.log(docs);
					callback(null, docs);
				});
			});
		}
	};
}

module.exports = GetMongoData;