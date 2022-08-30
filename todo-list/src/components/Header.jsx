
import styles from './Header.module.css';

import logo from '../assets/logo.svg';

export function Header() {
    return(
        <header className={styles.header}>
            <img src={logo} alt="Logo do Projeto"></img>
            <strong className={styles.to}>to</strong><strong className={styles.do}>do</strong>
        </header>
    );
}