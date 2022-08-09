import Botao from "../Botao";
import Relogio from "./Relogio";
import styles from './Cronometro.module.scss';
import { ITarefas } from "../../Interfaces/tarefas";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../Common/Utils/time";

interface Props{
    selecionado: ITarefas | undefined,
    finalizaTarefa: () => void
}

export default function Cronometro({ selecionado, finalizaTarefa }: Props) {
    
    const [tempo, setTempo] = useState<number>();

    useEffect( () => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    } ,[selecionado]);

    function regressiva(tempoRegressivo: number = 0){
        setTimeout( () => {
            if(tempoRegressivo > 0){
                setTempo(tempoRegressivo - 1);
                return regressiva(tempoRegressivo - 1);
            }
            finalizaTarefa();
        }, 1000);
    }

    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicio o cronômetro</p>
            <div className={styles.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => regressiva(tempo)}>
                Começar!
            </Botao>
        </div>
    );
}