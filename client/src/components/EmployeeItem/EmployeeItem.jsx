import React from 'react';
import styles from './EmployeeItem.module.css';
import moment from 'moment-timezone';

const EmployeeItem = ({ employee }) => {
  return (
    <div style={{padding: '10px'}}>
      <div className={styles.employeeContainer}>
        <p>Name: <span>{employee.name}</span></p>
        <p>Work time: <span>
          {moment(employee.startWorkTime).format('HH:mm')} - {moment(employee.endWorkTime).format('HH:mm')}
        </span></p>
        <p>Lunch time: <span>
          {moment(employee.startLunchTime).format('HH:mm')} - {moment(employee.endLunchTime).format('HH:mm')}
        </span></p>
      </div>
    </div>
  )
}

export default EmployeeItem;
