import styles from './Tasks.module.css';

import { ClipboardText } from 'phosphor-react';

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
            <div className={styles.empty}>
                <ClipboardText size={56} />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </article>
    )
}