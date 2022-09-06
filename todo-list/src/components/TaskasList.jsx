import { Trash } from 'phosphor-react';
import styles from './TasksList.module.css';

export function TasksList() {
    return (
        <div className={styles.tasksList}>
            <div className={styles.checkBox}>
                <input type="checkbox" name="" id="check" />
                <label for="check">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
            </div>
           <button title="Deletar Tarefa">
                <Trash size={16} />
            </button>
        </div>
    )
}