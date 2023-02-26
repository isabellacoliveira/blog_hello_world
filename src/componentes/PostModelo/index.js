import styles from './postmodelo.module.css';

// para que ela receba a imagem, posso colocar como parametro (objeto) em post modelo 
export default function PostModelo( {children, fotoCapa, titulo}){
    return(
        <article className={styles.postModeloContainer}>
            <div className={styles.fotoCapa} 
                    style={ { backgroundImage: `url(${fotoCapa})`}}>
            </div>
            <h2 className={styles.titulo}>
                {titulo}
            </h2>
            
            <div className={styles.postConteudoContainer}>
                {children} 
            </div>
        </article>
    )
}