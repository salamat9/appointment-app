const appointmentsCollection = require('../models/appointment.model');
const DatabaseError = require('../utils/errorTypes/databaseError');

async function getAppointmentsByEmployeeId({ employeeId }) {
	try {
		return await appointmentsCollection.find({
			employeeId,
		});
	} catch (err) {
		console.log(err);
		throw new DatabaseError();
	}
}

async function getAppointmentsByEmployeeIdAndDate({
	employeeId,
	startDay,
	endDay,
}) {
	try {
		return appointmentsCollection
			.find({
				employeeId,
				startTime: { $gte: startDay.toDate() },
				endTime: { $lte: endDay.toDate() },
			})
			.sort({ startTime: 1 });
	} catch (err) {
		console.log(err);
		throw new DatabaseError();
	}
}

async function createAppointment({ employeeId, startTime, endTime }) {
	try {
		return await appointmentsCollection.create({
			employeeId,
			startTime,
			endTime,
		});
	} catch (err) {
		console.log(err);
		throw new DatabaseError();
	}
}

module.exports = {
	getAppointmentsByEmployeeId,
	getAppointmentsByEmployeeIdAndDate,
	createAppointment,
};
