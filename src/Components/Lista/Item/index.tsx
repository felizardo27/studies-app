import { ITarefas } from '../../../Interfaces/tarefas';
import styles from '../Lista.module.scss'


export default function Item({tarefa, tempo, selecionado, completado, id}: ITarefas) {
  console.log('Tarefa: ', {tarefa, tempo, selecionado, completado, id})
  return (
    <li className={styles.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
