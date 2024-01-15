import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './navbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const location = useLocation();
    const getActivePageName = () => {
        switch (location.pathname) {
            case '/': return 'Password Reset';
            case '/generalpurpose': return 'General Purpose';
            case '/inboxmonitoring': return 'Inbox Monitoring';
            case '/newuser': return 'New User';
            default: return 'Menu';
        }
    };

    return (
        <>
            <div className={styles.NavBar}>
                
                <span className={styles.menu} onClick={() => setDropdownVisible(!dropdownVisible)}>
                    {/*<span className={`${styles.menuText} ${dropdownVisible ? styles.noUnderline : ''}`}>{getActivePageName()}</span>*/}
                    <span className={`${styles.menuText} ${dropdownVisible ? styles.hiddenMenu : ''}`}>{getActivePageName()}</span>
                    <FontAwesomeIcon
                        className={styles.faIcon}
                        icon={dropdownVisible ? faChevronRight : faBars}
                    />
                </span>
                <ul className={`${styles.links} ${dropdownVisible ? styles.visible : styles.hidden}`}>
                    <li className={styles.link} onClick={() => setDropdownVisible(!dropdownVisible)}><NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Password Reset</NavLink></li>
                    <li className={styles.link} onClick={() => setDropdownVisible(!dropdownVisible)}><NavLink to="/generalpurpose" className={({ isActive }) => isActive ? styles.active : ''}>General Purpose</NavLink></li>
                    <li className={styles.link} onClick={() => setDropdownVisible(!dropdownVisible)}><NavLink to="/inboxmonitoring" className={({ isActive }) => isActive ? styles.active : ''}>Inbox Monitoring</NavLink></li>
                    <li className={styles.link} onClick={() => setDropdownVisible(!dropdownVisible)}><NavLink to="/newuser" className={({ isActive }) => isActive ? styles.active : ''}>New User</NavLink></li>
                </ul>
            </div>

        </>
    )
}

export default NavBar