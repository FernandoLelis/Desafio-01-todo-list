import { useState } from 'react';
import { Check, PlusCircle } from 'phosphor-react';
import { ClipboardText } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

import { NewTask } from './NewTask';

import styles from './Tasks.module.css';

export function Tasks() {
    const [newTask, setNewTask] = useState([])
    const [newTaskText, setNewTaskText] = useState('')

    const tasksQuantity = newTask.length;
    const completedTasks = newTask.filter(newTask => newTask.isComplete).length;


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
            return newTask.id !== newTaskToDelete;
        })

        setNewTask(tasksWithoutDeleteOne);
    }

    function toggleIsCompleteById(taskId) {
        const tasksIsComplete = newTask.map(newTask => {
            if (newTask.id === taskId) {
                return {
                    ...newTask, 
                    isComplete: !newTask.isComplete
                };
            }
            return newTask;
        })
        setNewTask(tasksIsComplete);
    }

        

    return (
        <>
            <form onSubmit={handleCreateNewTask} className={styles.newTaskForm}>
                <textarea 
                    name="title"
                    value={newTaskText}
                    placeholder="Adicione uma nava tarefa" 
                    onChange={handleNewTaskChange}
                    required
                />

                <button 
                    type="submit"
                    disabled={newTaskText.length === 0}
                >
                    Criar
                    <PlusCircle size={16} />
                </button>
            </form>
            <article className={styles.tasks}>
                
                <header>
                    <div className={styles.created}>
                        <p>Tarefas criadas</p>
                        <span>{tasksQuantity}</span>
                    </div>
                    <div className={styles.done}>
                    <p>Concluídas</p>
                    <span>{completedTasks} de {tasksQuantity}</span>
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
                                    newTask={newTask}                                    
                                    onDeleteTask={deleteTask}
                                    onComplete={toggleIsCompleteById}
                                />
                            )
                        })}
                    </div>                       
                    }                
            </article>
        </>
        
    )
}