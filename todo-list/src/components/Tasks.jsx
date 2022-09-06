import styles from './Tasks.module.css';

import { ClipboardText } from 'phosphor-react';
import { TasksList } from './TaskasList';


const tasksList = [
  {
    id: 1,
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: false,
  },
  {
    id: 3,
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: false,
  }
]

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

            {tasksList.map(list => {
                return <TasksList />
            })

            }

            
        </article>
    )
}