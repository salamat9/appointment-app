import React from 'react';
import moment from 'moment';
import styles from './AvailableTimeSlot.module.css';


const AvailableTimeSlot = ({ 
  timeSlot,
  timezone,
  employeeId,
  createAppointment,
  onSubmit,
}) => {
  const handleAppointmentCreate = async (timeSlot) => {
    await createAppointment({
      employeeId,
      timezone,
      startTime: timeSlot.utcStartDateTime,
      endTime: timeSlot.utcEndDateTime,  
    })
    await onSubmit();
  }

  return (
		<div style={{padding: '10px'}}>
      <div className={timeSlot.busy ? styles.timeSlotContainer : styles.timeSlotContainer}>
        <p>
          Time range: 
          <span>{timeSlot.startDateTime} - {timeSlot.endDateTime}</span>
        </p>
        <p>
          Time range in UTC:
          <span>
            {moment.utc(timeSlot.utcStartDateTime).format('HH:mm')} - {moment.utc(timeSlot.utcEndDateTime).format('HH:mm')}
          </span>
        </p>
        {!timeSlot.busy &&
          <button onClick={() => handleAppointmentCreate(timeSlot)}>
            Create appointment
          </button>
        }
      </div>
		</div>
  )
}

export default AvailableTimeSlot;
