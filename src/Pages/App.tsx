import { useState } from "react";
import Cronometro from "../Components/Cronometro";
import Formulario from "../Components/Formulario";
import { Lista } from "../Components/Lista";
import { ITarefas } from "../Interfaces/tarefas";
import styles from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<ITarefas[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefas>();

  function selecionaTarefa(tarefaSelecionada: ITarefas) {
    setSelecionado(tarefaSelecionada);
    setTarefas( tarefasAnteriores => tarefasAnteriores.map( tarefa => ({
          ...tarefa,
          selecionado: tarefa.id === tarefaSelecionada.id ? true : false
        }) )
    );
  }

  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;
