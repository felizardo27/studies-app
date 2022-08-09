import React from "react";
import styles from './Botao.module.scss';

interface Props{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children: any
}

function Botao({onClick, type, children}: Props) {
    return (
        <button onClick={onClick} type={type} className={styles.botao}>
            {children}
        </button>
    );
}

// class Botao extends React.Component<{
//     children: any, 
//     type?: "button" | "submit" | "reset" | undefined,
//     onClick?: () => void
// }>{
//     render() {
//         const {type = 'button', onClick} = this.props;
//         return(
//             <button onClick={onClick} type={type} className={styles.botao}>
//                 {this.props.children}
//             </button>
//         );
//     }
// }

export default Botao;
