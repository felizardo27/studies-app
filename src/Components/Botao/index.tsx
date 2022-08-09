import React from "react";
import styles from './Botao.module.scss';

class Botao extends React.Component<{
    children: any, 
    type?: "button" | "submit" | "reset" | undefined
}>{
    render() {
        const {type = 'button'} = this.props;
        return(
            <button type={type} className={styles.botao}>
                {this.props.children}
            </button>
        );
    }
}

export default Botao;
