import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import eu from 'assets/eu.jpg'

export default function Banner() {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>
                <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou Isabella Oliveira,
                estagiária de Front-end da Modal GR. Aqui compartilho vários
                conhecimentos, espero que aprenda algo novo :)
        </p>
            </div>
            
        <div className={styles.imagens}>
            <img 
                className={styles.circuloColorido}
                src={circuloColorido}
                arial-hidden={true}
            />
            <img
                className={styles.eu}
                src={eu}
                alt="Foto da Isabella"
            />
        </div>
        </div>
    )
}

// agora vamos importar em inicio (index.js)