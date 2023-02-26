import PostModelo from 'componentes/PostModelo';
import styles from './SobreMim.module.css';
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/fotominha.jpg';

export default function SobreMim(){
    return(
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            {/* agora faremos o conteudo de sobremim  */}
        <h1 className={styles.substitulo}>
            Olá, eu sou Isabella
        </h1>
        <img 
            src={fotoSobreMim}
            alt="Foto da Isabella"
            className={styles.fotoSobreMim}
        />
    <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou estagiária de Front-end na Modal GR e estou feliz de te ver por aqui.
    </p>
    <p className={styles.paragrafo}>
        Minha história com programação começou na Faculdade de Teconologia de Praia Grande, na verdade... Quando eu estava no 8º ano, tive aula de HTML na escola em 2017. Mas eu não gostava e achava isso muito chato.
        Tinha em mente então que gostaria de fazer faculdade de música. Na verdade, pensei em várias coisas antes de finalmente conseguir decidir: pensei em publicidade e propaganda, porque eu gosto muito de criar e 
        de desenhar. Também pensei em fazer design, mas eu não conseguia pensar em qual dos tipos (lol), mas achei que me daria bem. Pensei também em ser veterinária. Mas acabei desistindo também.
    </p>
    <p className={styles.paragrafo}>
        Então quando eu terminei o ensino médio em 2021. Resolvi fazer inscrição para a FATEC. Porém, não coloquei muita fé em estudar lá. Mesmo assim, decidi me inscrever para outros vestibulares. Fiz ENEM, Fuvest, e 
        Unesp (até passei para a segunda fase). Porque havia um curso que eu sempre quis fazer e nunc a fiquei em dúvida sobre ele... é o de música. Então quando eu passei para a segunda fase da Unesp em música, fiquei 
        muito feliz. Porém no fim, acabei não passando na Unesp, mas a vida me abriu outras portas. 
    </p>
    <p className={styles.paragrafo}>
        Depois que eu vi o resultado da Unesp, decidi procurar outras faculdades. Era uma segunda-feira, eu estava prestes a fazer matrícula na faculdade de Tradução e Interpretação na Unisantos. Mas devido a alguns imprevistos,
        não consegui fazer. Então chegou o dia seguinte, eu estava preocupada com a matrícula. Então recebi uma ligação da FATEC, que eu havia sido aprovada na terceira chamada. SIM. Tiveram outras duas chamadas de aluno (por seleção
        de nota) e me chamaram na terceira. 
    </p>
    <p className={styles.paragrafo}>
        No começo eu achei que não fosse gostar da faculdade. Então acabei tendo meu primeiro contato com progamação. Comecei a aprender lógica de progamação e aprender HTML, CSS e javascript. Eu tinha gostado, mas ainda não sabia 
        se a área de progamação era o que eu queria seguir na informática. Mas quando eu percebi que eu podia usar minha criatividade na criação das páginas, comecei a pegar gosto por isso. Então decidi seguir a carreira de dev.
    </p>
    <p className={styles.paragrafo}>
        Cheguei na faculdade sem saber absolutamente nada sobre progamação. Mas comecei a pesquisar na internet e procurar cursos que me ajudassem a entender os problemas de lógica. E depois me veio o dilema, back-end ou front-end ? É 
        claro que eu escolhi o front kkkkk. SIM, eu sou uma pessoa MUITO visual. Mas não deixei o back de lado, continuo pesquisando e exercitando a parte back com exercicios de C# E JAVA. Hoje sou estagiária de Front-End na empresa Modal GR.
        Aprendi e estou aprendendo muitas coisas lá, inclusive React, que é o framework que estou usando para fazer essa aplicação. :) 
    </p>
      
        </PostModelo>
    )
}