import { Trash } from 'phosphor-react';


import styles from './NewTask.module.css';
import { v4 as uuidv4 } from 'uuid';

export function NewTask({ newTask, isComplete, onDeleteTask }) {
    function handleDeleteTask() {

        onDeleteTask(newTask);
    }


    const uuid = uuidv4();
    
    return (
        <div className={styles.newTask}>
            <div className={styles.checkBox}>
                
                <input type="checkbox" id={uuid} defaultChecked={isComplete} />
                <label htmlFor={uuid}>{newTask}</label>
                
            </div>

           <button onClick={handleDeleteTask} title="Deletar Tarefa">
                <Trash size={16} />
            </button>
        </div>
    )
}