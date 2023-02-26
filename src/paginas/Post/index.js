import { Routes, Route, useParams } from "react-router-dom";
import posts from 'json/posts.json'
import PostModelo from "componentes/PostModelo";
import  './Post.css';
import styles from './Post.module.css';
import NaoEncontrada from "componentes/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";


export default function Post(){
    const parametros = useParams();


    const post = posts.find((post) => {
        return post.id === Number(parametros.id); 
    })
    if(!post) {
        return <NaoEncontrada />
    }

    const postsRecomendados = posts.filter((post) => post.id !== Number(parametros.id));
    // assim, essa callback recebe um post como parametros 
    // e filtra os posts de forma que confira se o id do post aberto é diferente do id dos parametros 
        
        // .sort((a, b) => b.id - a.id);
        // .slice(0, 4);
        console.log(postsRecomendados)

    console.log(parametros)
    return (
      <PaginaPadrao>
                        <PostModelo
            fotoCapa={require(`../../assets/posts/${post.id}/capa.png`)}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
           <ReactMarkdown>
                {post.texto}
           </ReactMarkdown>
            </div>
            <h2 className={styles.titulosOutrosPosts}>
                Outros posts que você pode gostar:
            </h2>
            <ul className={styles.postsRecomendado}>
                    {postsRecomendados.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                    ))}

            </ul>
        </PostModelo>
            
      </PaginaPadrao>
        
    )
}
