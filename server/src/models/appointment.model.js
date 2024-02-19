const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
	employeeId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Employee',
		required: true,
	},
	startTime: {
		type: Date,
		required: true,
	},
	endTime: {
		type: Date,
		required: true,
	},
});

module.exports = mongoose.model('Appointment', appointmentSchema);
