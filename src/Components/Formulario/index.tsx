import React from 'react';
import { ITarefas } from '../../Interfaces/tarefas';
import Botao from '../Botao';
import styles from './Formulario.module.scss';

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
    }> {
    state = {
        tarefa: '',
        tempo: '00:00'
    }
    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        this.props.setTarefas( tarefasAntigas => [...tarefasAntigas, {...this.state}] )
        this.setState({tarefa: '', tempo: '00:00'})
    }
    render(){
        return (
            <form className={styles.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={styles.inputContainer}>
                    <label htmlFor="tarefa">Adicione nova tarefa</label>
                    <input 
                        type="text" 
                        name="tarefa" 
                        id="tarefa" 
                        placeholder='O que você vai estudar' 
                        required
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
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
                        value={this.state.tempo}
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                    />
                </div>
                <Botao type="submit">
                    Adicionar
                </Botao>
            </form>
        );
    }
}

export default Formulario;
