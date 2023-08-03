import { Link } from 'react-router-dom';
import styles from './navbar.module.scss'

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <ul className={styles.links}>
                <li className={styles.link}><Link to="/">Password Reset</Link></li>
                <li className={styles.link}><Link to="/generalpurpose">General Purpose</Link></li>

            </ul>
        </div>
    )
}

export default NavBar