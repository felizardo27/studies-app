import { ITarefas } from '../../Interfaces/tarefas';
import Item from './Item';
import styles from './Lista.module.scss';

interface Props{
    tarefas: ITarefas[],
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

export function Lista({ tarefas, selecionaTarefa }: Props ){
    
    return (
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map( item => (
                    <Item 
                        selecionaTarefa={selecionaTarefa} 
                        key={item.id} 
                        {...item} 
                    />
                ) )}
            </ul>
        </aside>
    );
}