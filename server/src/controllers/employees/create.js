const { convertToUTC } = require('../../utils/dateHelpers');
const { createEmployee } = require('../../services/employees.service');

async function httpCreateEmployee(req, res) {
	try {
		const {
			name,
			startWorkTime,
			endWorkTime,
			startLunchTime,
			endLunchTime,
			timezone,
		} = req.body;

		const newEmployee = await createEmployee({
			name,
			startWorkTime: convertToUTC(startWorkTime, timezone),
			endWorkTime: convertToUTC(endWorkTime, timezone),
			startLunchTime: convertToUTC(startLunchTime, timezone),
			endLunchTime: convertToUTC(endLunchTime, timezone),
		});

		res.status(201).json(newEmployee);
	} catch (err) {
		res.status(err.status).json({ error: err.message });
	}
}

module.exports = httpCreateEmployee;
