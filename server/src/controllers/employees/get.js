const { getEmployees } = require('../../services/employees.service');

async function httpGetEmployees(req, res) {
	try {
		const employees = await getEmployees();

		res.status(200).json(employees);
	} catch (err) {
		res.status(err.status).json({ error: err.message });
	}
}

module.exports = httpGetEmployees;
