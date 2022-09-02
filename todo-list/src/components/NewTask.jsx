import { PlusCircle } from 'phosphor-react';

import styles from './NewTask.module.css';



export function NewTask() {
    return (
        <div className={styles.newTask}>
            <form className={styles.newTaskForm}>

                <textarea 
                placeholder="Adicione uma nava tarefa" 
                />

                <button type="submit">
                    Criar
                    <PlusCircle size={16} />
                </button>
            </form>
        </div>
    );
}