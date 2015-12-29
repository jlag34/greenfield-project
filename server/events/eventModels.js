var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
	description: String,
	room: String,
	time: Number,
	date: Date
});

module.exports = mongoose.model('Event', EventSchema);


