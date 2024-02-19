import React from 'react';
import styles from './EmployeeForm.module.css';
import { timezones } from '../../utils/getTimezones';

const EmployeeForm = ({ createEmployee, isLoading, getEmployees }) => {
	const handleSubmit = async (e) => {
		await createEmployee(e)
		await getEmployees()
	}

  return (
		<div style={{padding: '10px'}}>

    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
			<label className={styles.label} htmlFor="name">Full name:</label>
			<input className={styles.input} required type="text" id="name" name="name" />
			<label className={styles.label} htmlFor="start-work-time">Start work time:</label>
			<input
          className={styles.input}
					required
					type="time"
					id="start-work-time"
					name="start-work-time"
				/>
				<label className={styles.label} htmlFor="end-work-time">End work time:</label>
				<input className={styles.input} required type="time" id="end-work-time" name="end-work-time" />
				<label className={styles.label} htmlFor="start-lunch-time">Start lunch time:</label>
				<input
          className={styles.input}
					required
					type="time"
					id="start-lunch-time"
					name="start-lunch-time"
				/>
				<label className={styles.label} htmlFor="end-lunch-time">End lunch time:</label>
				<input className={styles.input} required type="time" id="end-lunch-time" name="end-lunch-time" />
				<label htmlFor="timezone">Timezone:</label>
				<select className={styles.select} required id="timezone" name="timezone">
					{timezones.map(t => (
						<option key={t.id} value={t.value}>
							{t.value}
						</option>
					))}
				</select>
				<button className={styles.button} type="submit" 
          disabled={isLoading}
				>
					Create
				</button>
			</form>
			</div>
  )
}

export default EmployeeForm;
