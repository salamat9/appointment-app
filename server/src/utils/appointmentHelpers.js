const moment = require('moment-timezone');

const { DATETIME_FORMAT, TIME_FORMAT } = require('../constants/index');

function isOverlappingSlot(startTime, endTime, existingAppointments) {
	const item = existingAppointments.find(
		appointment =>
			startTime.isBefore(appointment.endTime) &&
			endTime.isAfter(appointment.startTime)
	);

	if (item) {
		return {
			startTime: moment(item.startTime),
			endTime: moment(item.endTime),
		};
	}
}

function presenter(startTime, endTime, timezone, isBusy, date) {
	return {
		date,
		timezone,
		busy: isBusy,
		startDateTime: startTime.tz(timezone).format(DATETIME_FORMAT),
		endDateTime: endTime.tz(timezone).format(DATETIME_FORMAT),
		utcStartDateTime: startTime.toISOString(),
		utcEndDateTime: endTime.toISOString(),
	};
}

function getDaySchedule(date, employee) {
	const startWorkTime = moment(employee.startWorkTime).format(TIME_FORMAT);
	const endWorkTime = moment(employee.endWorkTime).format(TIME_FORMAT);
	const startLunchTime = moment(employee.startLunchTime).format(TIME_FORMAT);
	const endLunchTime = moment(employee.endLunchTime).format(TIME_FORMAT);
	return {
		startWorkTime: moment(`${date}T${startWorkTime}`),
		endWorkTime: moment(`${date}T${endWorkTime}`),
		startLunchTime: moment(`${date}T${startLunchTime}`),
		endLunchTime: moment(`${date}T${endLunchTime}`),
	};
}

function isLunchTime(time, start, end) {
	if (
		time.isBetween(start, end) ||
		(time.isAfter(start) && time.isSameOrBefore(end))
	) {
		return true;
	}
	return false;
}

function getAppointmentSlots({
	date,
	timezone,
	employee,
	gradationCells,
	existingAppointments,
}) {
	let { startWorkTime, endWorkTime, startLunchTime, endLunchTime } =
		getDaySchedule(date, employee);
	const timeSlots = [];

	while (startWorkTime.isBefore(moment(endWorkTime))) {
		const endTime = startWorkTime.clone().add(gradationCells, 'minutes');

		if (isLunchTime(endTime, startLunchTime, endLunchTime)) {
			startWorkTime = moment(endLunchTime);
			continue;
		}

		if (endTime.isSameOrBefore(endWorkTime)) {
			const isOverlapped = isOverlappingSlot(
				startWorkTime,
				endTime,
				existingAppointments
			);

			if (isOverlapped) {
				timeSlots.push(
					presenter(
						isOverlapped.startTime,
						isOverlapped.endTime,
						timezone,
						true
					)
				);
				startWorkTime = moment(isOverlapped.endTime);
				continue;
			} else {
				timeSlots.push(presenter(startWorkTime, endTime, timezone, false));
			}
		}
		startWorkTime.add(gradationCells, 'minutes');
	}

	return timeSlots;
}

module.exports = {
	getAppointmentSlots,
	isOverlappingSlot,
};
