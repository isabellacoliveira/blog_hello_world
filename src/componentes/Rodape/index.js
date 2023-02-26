import styles from './Rodape.module.css'; 
// vamos importar o svg como "Marca registrada"
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'

export default function Rodape(){
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />
            Desenvolvido por Isabella
        </footer>
    )
}