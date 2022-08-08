import Cronometro from '../Components/Cronometro';
import Formulario from '../Components/Formulario';
import { Lista } from '../Components/Lista';
import styles from './App.module.scss';


function App() {
  return (
    <div className={styles.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
