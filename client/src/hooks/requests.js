import {
	APPOINTMENTS_URL,
	AVAILABLE_SLOTS_URL,
	EMPLOYEES_URL,
} from './constants';

const API_URL = process.env.REACT_APP_API_URL;

async function httpGetEmployees() {
	const response = await fetch(`${API_URL}/${EMPLOYEES_URL}`);
	return await response.json();
}

async function httpCreateEmployee(data) {
	try {
		return await fetch(`${API_URL}/${EMPLOYEES_URL}`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
	} catch (err) {
		return {
			ok: false,
		};
	}
}

async function httpGetAvailableAppointmentSlots(data) {
	const response = await fetch(`${API_URL}/${AVAILABLE_SLOTS_URL}`, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	return await response.json();
}

async function httpCreateAppointment(payload) {
	const response = await fetch(`${API_URL}/${APPOINTMENTS_URL}`, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	});

	return await response.json();
}

export {
	httpGetEmployees,
	httpCreateEmployee,
	httpGetAvailableAppointmentSlots,
	httpCreateAppointment,
};
