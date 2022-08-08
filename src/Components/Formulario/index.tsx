import React from 'react';
import Botao from '../Botao';
import styles from './Formulario.module.scss';

class Formulario extends React.Component {
    render(){
        return (
            <form className={styles.novaTarefa}>
                <div className={styles.inputContainer}>
                    <label htmlFor="tarefa">Adicione nova tarefa</label>
                    <input type="text" name="tarefa" id="tarefa" placeholder='O que você vai estudar' required/>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input type="time" name="tempo" id="tempo"  step="1" min="00:00:00" max="01:30:00"  required/>
                </div>
                <Botao />
            </form>
        );
    }
}

export default Formulario;
