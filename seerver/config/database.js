
const mongoose = require("mongoose");
require("dotenv").config();


//const { MONGODB_URL } = process.env;

exports.connect = () => {
	mongoose
		.connect('mongodb://127.0.0.1:27017/SaSa', {
			useNewUrlparser: true,
			useUnifiedTopology: true,
		})
		.then(console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
