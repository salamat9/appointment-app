const moment = require('moment-timezone');

const { DATE_FORMAT } = require('../constants');

function convertToUTC(string, timezone) {
	const parsedTime = moment.tz(string, 'HH:mm', timezone);
	return parsedTime.utc().format('YYYY-MM-DDTHH:mm:ss[Z]');
}

function startDay(date, timezone) {
	const parsedDate = moment.tz(date, DATE_FORMAT, timezone);
	return parsedDate.startOf('day');
}

function endDay(date, timezone) {
	const parsedDate = moment.tz(new Date(date), DATE_FORMAT, timezone);
	return parsedDate.endOf('day');
}

module.exports = {
	convertToUTC,
	endDay,
	startDay,
};
