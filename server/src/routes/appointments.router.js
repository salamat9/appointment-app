const express = require('express');

const httpGetAllSlots = require('../controllers/appointments/getAllSlots');
const httpCreateAppointment = require('../controllers/appointments/create');

const appointmentsRouter = express.Router();

appointmentsRouter.post('/available-slots', httpGetAllSlots);
appointmentsRouter.post('', httpCreateAppointment);

module.exports = appointmentsRouter;
