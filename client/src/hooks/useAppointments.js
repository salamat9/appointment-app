import { useCallback, useState } from 'react';

import {
	httpGetAvailableAppointmentSlots,
	httpCreateAppointment,
} from './requests';

function useAppointments() {
	const [availableSlots, setAvailableSlots] = useState([]);
	const [isAppointmentLoading, setAppointmentIsLoading] = useState(false);

	const getAvailableAppointmentSlots = useCallback(
		async ({ date, timezone, duration, employeeId }) => {
			setAppointmentIsLoading(true);

			const response = await httpGetAvailableAppointmentSlots({
				employeeId,
				date,
				timezone,
				gradationCells: duration,
			});

			if (response) {
				setAvailableSlots(response);
				setAppointmentIsLoading(false);
			}
		},
		[]
	);

	const createAppointment = useCallback(
		async ({ employeeId, timezone, startTime, endTime }) => {
			setAppointmentIsLoading(true);
			const response = await httpCreateAppointment({
				employeeId,
				startTime,
				endTime,
				timezone,
			});

			if (response) {
				setAppointmentIsLoading(false);
			}
		},
		[]
	);

	return {
		availableSlots,
		getAvailableAppointmentSlots,
		createAppointment,
		isAppointmentLoading,
	};
}

export default useAppointments;
