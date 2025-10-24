import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>ioNihal</h1>
            <nav className={styles.navbar}>
                <ul>
                    <li className={styles.navItem}>Projects</li>
                    <li className={styles.navItem}>Resume</li>
                    <li className={styles.navItem}>Wayback</li>
                    <li className={styles.navItem}>Stadium</li>
                </ul>
            </nav>
        </header>
    )
}
