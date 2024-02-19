const employeesCollection = require('../models/employee.model');
const DatabaseError = require('../utils/errorTypes/databaseError');

async function getEmployeeById(id) {
	try {
		return await employeesCollection.findById(id);
	} catch (err) {
		console.log(err);
		throw new DatabaseError();
	}
}

async function getEmployees() {
	try {
		return await employeesCollection.find();
	} catch (err) {
		console.log(err);
		throw new DatabaseError();
	}
}

async function createEmployee({
	name,
	startWorkTime,
	endWorkTime,
	startLunchTime,
	endLunchTime,
}) {
	try {
		return await employeesCollection.create({
			name,
			startWorkTime,
			endWorkTime,
			startLunchTime,
			endLunchTime,
		});
	} catch (err) {
		console.log(err);
		throw new DatabaseError();
	}
}

module.exports = {
	getEmployeeById,
	getEmployees,
	createEmployee,
};
