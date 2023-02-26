import styles from './BotaoPrincipal.module.css';

export default function BotaoPrincipal({children, tamanho}){
    // esse botão tem os mesmos estilos do botão presente nos posts
    // vamos então definir um só componente para ser botão
    // agora vamos trocar o botão presente nos cards dos posts 
    return (
        <button className={`
                ${styles.botaoPrincipal}
                ${styles[tamanho]}
        `}>
            {/* podemos adicionar uma prop no botao principal, dizendo o nome da classe que você quer adicionar  */}
            {/* se o valor de tamanho for lg  */}
            { children }
        </button>
    )
}