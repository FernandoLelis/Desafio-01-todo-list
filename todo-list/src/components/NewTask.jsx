import { Check, Trash } from 'phosphor-react';

import checked from '../assets/checked.svg';


import styles from './NewTask.module.css';

export function NewTask({ title, id, isComplete, onDeleteTask, onComplete }) {
    

    function handleDeleteTask() {
        
        onDeleteTask(id);
    }
    
    return (
        <div className={styles.newTask}>
            <button className={styles.checkContainer} onClick={() => onComplete(id)} >
                {isComplete ? <img src={checked} alt="Checked" />  : <div />}
            </button>
            <p>{title}</p> 

           <button onClick={handleDeleteTask} title="Deletar Tarefa">
                <Trash size={16} />
            </button>
        </div>
    )
}