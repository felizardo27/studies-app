import React from "react";
import styles from './Botao.module.scss';

class Botao extends React.Component {

    render() {
        return(
            <button className={styles.botao}>
                Botão
            </button>
        );
    }
}

export default Botao;
