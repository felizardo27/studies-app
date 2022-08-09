import Botao from "../Botao";
import Relogio from "./Relogio";
import styles from './Cronometro.module.scss';
import { ITarefas } from "../../Interfaces/tarefas";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../Common/Utils/time";

interface Props{
    selecionado: ITarefas | undefined
}

export default function Cronometro({ selecionado }: Props) {
    
    const [tempo, setTempo] = useState<number>();

    useEffect( () => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    } ,[selecionado]);

    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicio o cronômetro</p>
            <div className={styles.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao>
                Começar!
            </Botao>
        </div>
    );
}