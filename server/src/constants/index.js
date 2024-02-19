const DATETIME_FORMAT = 'DD.MM.YYYY HH:mm';
const TIME_FORMAT = 'HH:mm:ss';

const EMPLOYEE_NOT_FOUND_ERROR = id => `Employee with id: ${id} not found!`;
const OVERLAPPING_APPOINTMENT_ERROR =
	'Appointment overlaps with existing appointments';

module.exports = {
	DATETIME_FORMAT,
	TIME_FORMAT,
	EMPLOYEE_NOT_FOUND_ERROR,
	OVERLAPPING_APPOINTMENT_ERROR,
};
