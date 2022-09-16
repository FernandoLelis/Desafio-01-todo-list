import { Check, Trash } from 'phosphor-react';

import checked from '../assets/checked.svg';


import styles from './NewTask.module.css';

export function NewTask({ newTask, onDeleteTask, onComplete }) {
    

    function handleDeleteTask() {
        
        onDeleteTask(newTask.id);
    }
    
    return (
        <div className={styles.newTask}>
            <button className={styles.checkContainer} onClick={() => onComplete(newTask.id)} >
                {newTask.isComplete ? <img src={checked} alt="Checked" />  : <div />}
            </button>
            <p className={newTask.isComplete ? styles.textIsComplete : ""}>{newTask.title}</p> 

           <button onClick={handleDeleteTask} title="Deletar Tarefa">
                <Trash size={16} />
            </button>
        </div>
    )
}