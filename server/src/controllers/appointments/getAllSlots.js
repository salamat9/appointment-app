const DataNotFoundError = require('../../utils/errorTypes/dataNotFoundError');
const { EMPLOYEE_NOT_FOUND_ERROR } = require('../../constants');
const { getEmployeeById } = require('../../services/employees.service');
const { getAppointmentSlots } = require('../../utils/appointmentHelpers');
const { startDay, endDay } = require('../../utils/dateHelpers');
const {
	getAppointmentsByEmployeeIdAndDate,
} = require('../../services/appointments.service');

async function httpGetAllSlots(req, res) {
	try {
		const { employeeId, date, timezone, gradationCells } = req.body;

		const employee = await getEmployeeById(employeeId);

		if (!employee) {
			throw new DataNotFoundError(EMPLOYEE_NOT_FOUND_ERROR(employeeId));
		}

		const existingAppointments = await getAppointmentsByEmployeeIdAndDate({
			employeeId,
			startDay: startDay(date, timezone),
			endDay: endDay(date, timezone),
		});

		const timeSlots = getAppointmentSlots({
			date,
			timezone,
			employee,
			gradationCells,
			existingAppointments,
		});

		res.status(200).json(timeSlots);
	} catch (err) {
		res.status(err.status).json({ error: err.message });
	}
}

module.exports = httpGetAllSlots;
