
import styles from './Header.module.css';

import logo from '../assets/logo.svg';

export function Header() {
    return(
        <header className={styles.header}>
            <strong><img src={logo} alt="Logo do Projeto"></img>Todo</strong>
        </header>
    );
}