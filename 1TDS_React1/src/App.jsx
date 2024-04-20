import './App.css'
import ComponenteFilho from './components/ComponenteFilho'

function App() {

  let curso = 'JS - React'
  let professor = 'Luis Carlos'
  let alunos = ['Giovanni', 'Ana', 'Luiz', 'Tomaz']

  return (
    <>
      <h1>Aula de React</h1>
      <p>Curso: {curso}</p>
      <ComponenteFilho prof={professor} alunos={alunos}/>
    </>
  )
}

export default App
