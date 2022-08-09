import React, { useState } from "react";
import { ITarefas } from "../../Interfaces/tarefas";
import Botao from "../Botao";
import styles from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}

function Formulario({ setTarefas }: Props){
  const [tarefa, setTarefa] = useState('');
  const [tempo, setTempo] = useState('00:00');

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        tarefa, 
        tempo,
        selecionado: false,
        completado: false,
        id: uuidv4()
      },
    ]);
    setTarefa('');
    setTempo('00:00');
  }
  return (
    <form
        className={styles.novaTarefa}
        onSubmit={adicionarTarefa}
      >
        <div className={styles.inputContainer}>
          <label htmlFor="tarefa">Adicione nova tarefa</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você vai estudar"
            required
            value={tarefa}
            onChange={(evento) =>
              setTarefa(evento.target.value)
            }
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            name="tempo"
            id="tempo"
            step="1"
            min="00:00:00"
            max="01:30:00"
            required
            value={tempo}
            onChange={(evento) =>
              setTempo(evento.target.value)
            }
          />
        </div>
        <Botao type="submit">Adicionar</Botao>
      </form>
  );
}

// class Formulario extends React.Component<
// {
//   setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>;
// }> {
//   state = {
//     tarefa: "",
//     tempo: "00:00",
//   };
//   adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
//     evento.preventDefault();
//     this.props.setTarefas((tarefasAntigas) => [
//       ...tarefasAntigas,
//       {
//         ...this.state,
//         selecionado: false,
//         completado: false,
//         id: uuidv4()
//       },
//     ]);
//     this.setState({ tarefa: "", tempo: "00:00" });
//   }
//   render() {
//     return (
//       <form
//         className={styles.novaTarefa}
//         onSubmit={this.adicionarTarefa.bind(this)}
//       >
//         <div className={styles.inputContainer}>
//           <label htmlFor="tarefa">Adicione nova tarefa</label>
//           <input
//             type="text"
//             name="tarefa"
//             id="tarefa"
//             placeholder="O que você vai estudar"
//             required
//             value={this.state.tarefa}
//             onChange={(evento) =>
//               this.setState({ ...this.state, tarefa: evento.target.value })
//             }
//           />
//         </div>
//         <div className={styles.inputContainer}>
//           <label htmlFor="tempo">Tempo</label>
//           <input
//             type="time"
//             name="tempo"
//             id="tempo"
//             step="1"
//             min="00:00:00"
//             max="01:30:00"
//             required
//             value={this.state.tempo}
//             onChange={(evento) =>
//               this.setState({ ...this.state, tempo: evento.target.value })
//             }
//           />
//         </div>
//         <Botao type="submit">Adicionar</Botao>
//       </form>
//     );
//   }
// }

export default Formulario;
