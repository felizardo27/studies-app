import React from 'react';
import Botao from '../Botao';
import './style.scss';

class Formulario extends React.Component {
    render(){
        return (
            <form className="novaTarefa">
                <div className="inputContainer">
                    <label htmlFor="tarefa">Adicione nova tarefa</label>
                    <input type="text" name="tarefa" id="tarefa" placeholder='O que você vai estudar' required/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="tempo">Tempo</label>
                    <input type="time" name="tempo" id="tempo"  step="1" min="00:00:00" max="01:30:00"  required/>
                </div>
                <Botao />
            </form>
        );
    }
}

export default Formulario;
