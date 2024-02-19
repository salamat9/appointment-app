const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	startWorkTime: {
		type: String,
		required: true,
	},
	endWorkTime: {
		type: String,
		required: true,
	},
	startLunchTime: {
		type: String,
		required: true,
	},
	endLunchTime: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Employee', employeeSchema);
