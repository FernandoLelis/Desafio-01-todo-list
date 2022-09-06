import { PlusCircle } from 'phosphor-react';

import styles from './NewTask.module.css';


const tasksList = [
    1,
    2,
  ]

  function handleCreateNewTask() {
    event.preventDefault();
    
    tasksList.push(3);

    console.log(tasksList);
  }

export function NewTask() {
    return (
        <div className={styles.newTask}>
            <form onSubmit={handleCreateNewTask} className={styles.newTaskForm}>

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