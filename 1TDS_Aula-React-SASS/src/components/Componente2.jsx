import styles from './Componente2.module.css'

export default function Componente1(){

    return(
        <div>   
            <h2>Componente 2</h2>
            <button className={styles.btn}>Clique aqui</button> 
            <p className={styles.colorParagr}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    )

}