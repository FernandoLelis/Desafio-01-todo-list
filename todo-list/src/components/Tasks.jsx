import { useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { ClipboardText } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

import { NewTask } from './NewTask';

import styles from './Tasks.module.css';

const task = [{
    id: uuidv4(),
    title: '',
    isComplete: false,

}]

export function Tasks() {
    const [newTask, setNewTask] = useState([])

    const [newTaskText, setNewTaskText] = useState('')


    function handleCreateNewTask() {
        event.preventDefault();

       
        
        setNewTask([...newTask, 
            {
                id: uuidv4(),
                title: newTaskText,
                isComplete: false,
            
            }]);
        setNewTaskText('');
      }

      function handleNewTaskChange() {
        setNewTaskText(event.target.value);
      }

      function deleteTask(newTaskToDelete) {
           const tasksWithoutDeleteOne = newTask.filter(newTask => {
                return newTask !== newTaskToDelete;
            })

            setNewTask(tasksWithoutDeleteOne);
        }

    return (
        <>
            <form onSubmit={handleCreateNewTask} className={styles.newTaskForm}>
                <textarea 
                    name="title"
                    value={newTaskText}
                    placeholder="Adicione uma nava tarefa" 
                    onChange={handleNewTaskChange}
                />

                <button type="submit">
                    Criar
                    <PlusCircle size={16} />
                </button>
            </form>
            <article className={styles.tasks}>
                
                <header>
                    <div className={styles.created}>
                        <p>Tarefas criadas</p>
                        <span>{newTask.length}</span>
                    </div>
                    <div className={styles.done}>
                    <p>Concluídas</p>
                    <span>{newTask.length} de {newTask.length}</span>
                    </div>
                </header> 

                    { 
                    newTask.length === 0 ?
                        <div className={styles.empty}>
                            <ClipboardText size={56} />
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div> :
                        <div className={styles.tasksList}>
                        {newTask.map(newTask => {
                            return (
                                <NewTask 
                                    key={newTask.id} 
                                    newTask={newTask.title} 
                                    isComplete={newTask.isComplete}
                                    onDeleteTask={deleteTask} 
                                />
                            )
                        })}
                    </div>                       
                    }                
            </article>
        </>
        
    )
}