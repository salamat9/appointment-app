import React from 'react';
import EmployeeForm from '../components/EmployeeForm/EmployeeForm';
import EmployeeItem from '../components/EmployeeItem/EmployeeItem';

const EmployeePage = ({
	createEmployee,
	isLoading,
	employees,
	getEmployees,
}) => {
	return (
		<div>
			<EmployeeForm
				createEmployee={createEmployee}
				isLoading={isLoading}
				getEmployees={getEmployees}
			/>
			{employees.map(employee => (
				<EmployeeItem key={employee._id} employee={employee} />
			))}
		</div>
	);
};

export default EmployeePage;
