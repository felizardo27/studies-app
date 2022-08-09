import { ITarefas } from '../../../Interfaces/tarefas';
import styles from './Item.module.scss'

interface Props extends ITarefas {
  selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

export default function Item({
    tarefa, tempo, selecionado, completado, id, selecionaTarefa
  }: Props) {
  return (
    <li 
      className={`
        ${styles.item} 
        ${selecionado ? styles.itemSelecionado : '' } 
        ${completado ? styles.itemCompletado : '' }
      `} 
      onClick={
            () => !completado && selecionaTarefa({
              tarefa, tempo, selecionado, completado, id
            })
          } 
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && 
        <span 
          className={styles.concluido} 
          arial-label="Item Concluido"
        ></span>
      }
    </li>
  );
}
