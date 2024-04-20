/* eslint-disable react/prop-types */
function ComponenteFilho(props) {



    return(
        <>
            <h2>Componente filho</h2>
            <p>Professor: {props.prof}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat obcaecati accusamus vero laboriosam facilis. Iste consectetur sed mollitia dolore magni? Quas iste, harum at enim nostrum quasi distinctio voluptatem asperiores!</p>
            {props.alunos.map((aluno, i) => (<p key={i}>{i+1} - {aluno}</p>))}
        </>
    )
}

export default ComponenteFilho