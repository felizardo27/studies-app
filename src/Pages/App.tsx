import Formulario from '../Components/Formulario';
import { Lista } from '../Components/Lista';
import styles from './App.module.scss';


function App() {
  return (
    <div className={styles.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
