import './App.css'

function App() {

  return (
    <>
      <header>
        <span>
          <a href="./App.jsx">
            <img src="img/Logo_ecommerce.png" alt="" />
          </a>
        </span>
        <ul>
          <li className='item_menu'>Home</li>
          <li className='item_menu'>Aparelhos</li>
        </ul>
      </header>



      <footer>
        <div className="integrantes">
          <h3>Integrantes</h3>
          <p>Ana Clara Aguiar Guimarães Perin Remotto RM: 97898</p>
          <p>Antônio Felipe De Araújo Junior RM: 551350</p>
          <p>Giovanni Paschoallato Ibelli RM: 98837</p>
        </div>
        <div className="infos_loja">
          <h3>Smart Sell</h3>
          <p>CNPJ: 11.222.333/0001-44</p>
          <p>Av. Paulista, 1106. Bela Vista, São Paulo - SP</p>
          <p>Tel.: (11) 91234-5678</p>
        </div>
      </footer>
    </>
  )
}

export default App
