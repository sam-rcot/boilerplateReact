import styles from './navbar.module.scss'

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <ul className={styles.links}>
                <li className={styles.link}><a href="">Password reset boilerplate</a></li>
                <li className={styles.link}><a href="">General purpose boilerplate</a></li>
            </ul>
        </div>
    )
}

export default NavBar