var mongoose = require('mongoose');
// mongoose.promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/skilldb',{ useNewUrlParser: true });

module.exports = {
	mongoose
};