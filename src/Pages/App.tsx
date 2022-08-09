import { useState } from "react";
import Cronometro from "../Components/Cronometro";
import Formulario from "../Components/Formulario";
import { Lista } from "../Components/Lista";
import { ITarefas } from "../Interfaces/tarefas";
import styles from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<ITarefas[] | []>([]);
  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
