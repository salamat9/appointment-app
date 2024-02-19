const moment = require('moment-timezone');

const BadRequestError = require('../../utils/errorTypes/badRequestError');
const DataNotFoundError = require('../../utils/errorTypes/dataNotFoundError');
const { getEmployeeById } = require('../../services/employees.service');
const { isOverlappingSlot } = require('../../utils/appointmentHelpers');
const {
	getAppointmentsByEmployeeId,
	createAppointment,
} = require('../../services/appointments.service');
const {
	EMPLOYEE_NOT_FOUND_ERROR,
	OVERLAPPING_APPOINTMENT_ERROR,
} = require('../../constants');

async function httpCreateAppointment(req, res) {
	try {
		const { employeeId, startTime, endTime } = req.body;

		const employee = await getEmployeeById(employeeId);

		if (!employee) {
			throw new DataNotFoundError(EMPLOYEE_NOT_FOUND_ERROR(employeeId));
		}

		const existingAppointments = await getAppointmentsByEmployeeId({
			employeeId,
		});

		const isOverlappingAppointment = isOverlappingSlot(
			moment(startTime),
			moment(endTime),
			existingAppointments
		);

		if (isOverlappingAppointment) {
			throw new BadRequestError(OVERLAPPING_APPOINTMENT_ERROR);
		}

		const newAppointment = await createAppointment({
			employeeId,
			startTime,
			endTime,
		});

		res.status(201).json(newAppointment);
	} catch (err) {
		res.status(err.status).json({ error: err.message });
	}
}

module.exports = httpCreateAppointment;
