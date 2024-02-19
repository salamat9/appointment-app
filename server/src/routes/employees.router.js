const express = require('express');

const httpGetEmployees = require('../controllers/employees/get');
const httpCreateEmployee = require('../controllers/employees/create');

const employeesRouter = express.Router();

employeesRouter.get('', httpGetEmployees);
employeesRouter.post('', httpCreateEmployee);

module.exports = employeesRouter;
