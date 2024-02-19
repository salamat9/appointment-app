const moment = require('moment-timezone');

export const timezones = moment.tz.names().map((timezone, index) => ({
	id: index + 1,
	value: timezone,
}));
