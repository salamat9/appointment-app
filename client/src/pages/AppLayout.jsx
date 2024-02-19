import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import NotFoundPage from './NotFoundPage';
import EmployeePage from './EmployeePage';
import useEmployees from '../hooks/useEmployees';
import AppointmentsPage from './AppointmentPage';
import useAppointments from '../hooks/useAppointments';

const AppLayout = () => {
	const { employees, isLoading, getEmployees, createEmployee } = useEmployees();
	const {
		availableSlots,
		getAvailableAppointmentSlots,
		createAppointment,
		isAppointmentLoading,
	} = useAppointments();

	return (
		<div>
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<EmployeePage
							getEmployees={getEmployees}
							createEmployee={createEmployee}
							isLoading={isLoading}
							employees={employees}
						/>
					}
				/>
				<Route
					path="/employees"
					element={
						<EmployeePage
							getEmployees={getEmployees}
							createEmployee={createEmployee}
							isLoading={isLoading}
							employees={employees}
						/>
					}
				/>
				<Route
					path="/appointments"
					element={
						<AppointmentsPage
							employees={employees}
							availableSlots={availableSlots}
							isLoading={isAppointmentLoading}
							createAppointment={createAppointment}
							getAvailableAppointmentSlots={getAvailableAppointmentSlots}
						/>
					}
				/>
				<Route path={'/*'} element={<NotFoundPage />} />
			</Routes>
		</div>
	);
};

export default AppLayout;
