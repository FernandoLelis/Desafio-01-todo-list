import { Check, Trash } from 'phosphor-react';


import styles from './NewTask.module.css';

export function NewTask({ newTask, isComplete, id, onDeleteTask, onComplete }) {
    
    function handleDeleteTask() {
        
        onDeleteTask(id);
    }
    
    return (
        <div className={styles.newTask}>
            <button className={styles.checkContainer}>
                <div onClick={() => onComplete(newTask.id)} />
            </button>
            <p>{newTask}</p> 

           <button onClick={handleDeleteTask} title="Deletar Tarefa">
                <Trash size={16} />
            </button>
        </div>
    )
}