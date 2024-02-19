import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
	return (
		<nav className={styles.navContainer}>
			<Link className={styles.navLink} to="/employees">
				Employees
			</Link>
			<Link className={styles.navLink} to="/appointments">
				Appointments
			</Link>
		</nav>
	);
};

export default Header;
