import React, { useState } from 'react';

import AppointmentForm from '../components/AppointmentForm/AppointmentForm';
import AvailableTimeSlot from '../components/AvailableTimeSlot/AvailableTimeSlot';

const AppointmentsPage = ({
	employees,
	isLoading,
	availableSlots,
	createAppointment,
	getAvailableAppointmentSlots,
}) => {
	const [date, setDate] = useState();
	const [timezone, setTimezone] = useState();
	const [duration, setDuration] = useState();
	const [employeeId, setEmployeeId] = useState();

	const getTimeSlots = async () => {
		await getAvailableAppointmentSlots({
			date,
			timezone,
			duration,
			employeeId,
		});
	};

	return (
		<div>
			<AppointmentForm
				setDate={setDate}
				isLoading={isLoading}
				employees={employees}
				setTimezone={setTimezone}
				setDuration={setDuration}
				setEmployeeId={setEmployeeId}
				onSubmit={getTimeSlots}
			/>
			{availableSlots &&
				availableSlots.map((timeSlot, i) => (
					<>
						<AvailableTimeSlot
							key={i}
							timezone={timezone}
							timeSlot={timeSlot}
							employeeId={employeeId}
							createAppointment={createAppointment}
							onSubmit={getTimeSlots}
						/>
					</>
				))}
		</div>
	);
};

export default AppointmentsPage;
