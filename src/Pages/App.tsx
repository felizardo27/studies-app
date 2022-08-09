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

  function finalizaTarefa(){
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas( tarefasAnteriores => tarefasAnteriores.map( tarefa => {
       if(tarefa.id === selecionado.id) {
        return { ...tarefa, selecionado: false, completado: true }
       }   
       return tarefa;
    } ) )
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas} 
        selecionaTarefa={selecionaTarefa} 
      />
      <Cronometro 
        selecionado={selecionado}
        finalizaTarefa={finalizaTarefa}
      />
    </div>
  );
}

export default App;
