import React from 'react';
import styles from './AppointmentForm.module.css';
import { timezones } from '../../utils/getTimezones';

const AppointmentForm = ({ 
	setDate,
	employees,
	isLoading,
	setTimezone,
	setDuration,
	setEmployeeId,
	onSubmit,
}) => {
  const today = new Date().toISOString().split('T')[0];

	const handleSubmit = async (e) => {
			e.preventDefault();
			await onSubmit();
	}

  return (
    <div style={{padding: '10px'}}>
      <form onSubmit={handleSubmit} className={styles.form}>
				<label className={styles.label} htmlFor="employee-id">Barber:</label>
				<select onChange={(e) => setEmployeeId(e.target.value)} className={styles.select} required id="employee-id" name="employee-id">
					<option value="">Select barber</option>
					{employees.map(t => (
						<option key={t._id} value={t._id}>
							{t.name}
						</option>
					))}
				</select>
				<label className={styles.label} htmlFor="date">
					Date:
				</label>
				<input
					onInput={(e) => setDate(e.target.value)}
					className={styles.input}
					required
					type="date"
					id="date"
					min={today}
				/>
				<label className={styles.label} htmlFor="timezone">
					Timezone:
				</label>
				<select onChange={(e) => setTimezone(e.target.value)} className={styles.select} required id="timezone">
					<option value="">Select timezone</option>
					{timezones.map(t => (
						<option key={t.id} value={t.value}>
							{t.value}
						</option>
					))}
				</select>
				<label className={styles.label} htmlFor="gradation-cells">
					Duration:
				</label>
				<input
					onInput={(e) => setDuration(e.target.value)}
					className={styles.input}
					required
					type="number"
					id="gradation-cells"
					min="10"
				/>
				<button type="submit" className={styles.button} disabled={isLoading}>
					Get available time slots
				</button>
			</form>
    </div>
  )
}

export default AppointmentForm;
