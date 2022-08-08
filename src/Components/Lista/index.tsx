import Item from './Item';
import styles from './Lista.module.scss';

export function Lista(){

    const tarefas = [{
        tarefa: 'React',
        tempo: '01:30:00'
      },{
        tarefa: 'SASS',
        tempo: '01:00:00'
      },{
        tarefa: 'Angular',
        tempo: '02:00:00'
      }
    ];
    
    return (
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map( (item, index) => (
                    <Item key={index} {...item} />
                ) )}
            </ul>
        </aside>
    );
}