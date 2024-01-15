import { NavLink } from 'react-router-dom';
import styles from './navbar.module.scss'

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <ul className={styles.links}>
                <li className={styles.link}><NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Password Reset</NavLink></li>
                <li className={styles.link}><NavLink to="/generalpurpose" className={({ isActive }) => isActive ? styles.active : ''}>General Purpose</NavLink></li>
                <li className={styles.link}><NavLink to="/inboxmonitoring" className={({ isActive }) => isActive ? styles.active : ''}>Inbox Monitoring</NavLink></li>
                <li className={styles.link}><NavLink to="/newuser" className={({ isActive }) => isActive ? styles.active : ''}>New User</NavLink></li>

            </ul>
        </div>
    )
}

export default NavBar