import { useCallback, useEffect, useState } from 'react';

import { httpGetEmployees, httpCreateEmployee } from './requests';

function useEmployees() {
	const [employees, setEmployees] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getEmployees = useCallback(async () => {
		const fetchedEmployees = await httpGetEmployees();
		setEmployees(fetchedEmployees);
	}, []);

	useEffect(() => {
		getEmployees();
	}, [getEmployees, isLoading]);

	const createEmployee = useCallback(
		async e => {
			e.preventDefault();

			setIsLoading(true);

			const data = new FormData(e.target);
			const name = data.get('name');
			const startWorkTime = data.get('start-work-time');
			const endWorkTime = data.get('end-work-time');
			const startLunchTime = data.get('start-lunch-time');
			const endLunchTime = data.get('end-lunch-time');
			const timezone = data.get('timezone');

			const response = await httpCreateEmployee({
				name,
				startWorkTime,
				endWorkTime,
				startLunchTime,
				endLunchTime,
				timezone,
			});

			if (response.data) {
				getEmployees();
				setIsLoading(false);
			}
		},
		[getEmployees]
	);

	return {
		employees,
		isLoading,
		createEmployee,
		getEmployees,
	};
}

export default useEmployees;
