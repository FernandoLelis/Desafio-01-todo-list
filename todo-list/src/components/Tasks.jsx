import { TasksList } from './TaskasList';

import { ClipboardText } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

import styles from './Tasks.module.css';

/*
const tasksList = [
  {
    id: uuidv4(),
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: false,
  },
  {
    id: uuidv4(),
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: false,
  },
  
]
*/


export function Tasks() {
    return (
        <article className={styles.tasks}>
            <header>
                <di className={styles.created}>
                    <p>Tarefas criadas</p>
                    <span>0</span>
                </di>
                <div className={styles.done}>
                <p>Concluídas</p>
                <span>0 de 0</span>
                </div>
            </header> 
                {/*        
            <div className={styles.empty}>
                <ClipboardText size={56} />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div> 
            */} 
                  <TasksList />
                  <TasksList />
                  <TasksList />             

            
        </article>
    )
}