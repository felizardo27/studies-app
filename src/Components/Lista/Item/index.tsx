import { ITarefas } from '../../../Interfaces/tarefas';
import styles from '../Lista.module.scss'

interface Props extends ITarefas {
  selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

export default function Item({
    tarefa, tempo, selecionado, completado, id, selecionaTarefa
  }: Props) {
  return (
    <li 
      className={`${styles.item} ${selecionado === true ? styles.itemSelecionado : '' }`} 
      onClick={() => selecionaTarefa({
          tarefa, tempo, selecionado, completado, id
        })} 
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
