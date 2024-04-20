import { useState } from "react"
import './PetCadastro.scss'

export default function PetCadastro() {

    const [pet, setPet] = useState(
        {
            nome: '',
            idade: '',
            raca: '',
            tamanho: '',
            nomeDono: '',
            telDono: ''
        }
    )

    

    return(
        <div className="formsPet">
            <form onSubmit={inserirPet}>
                <fieldset>
                    <legend>Cadastre seu Pet</legend>
                    <label>Nome:
                        <input type="text" name="nome"/>
                    </label>
                    <label>Idade:
                        <input type="number" name="idade"/>
                    </label>
                    <label>Raça:
                        <input type="text" name="raça"/>
                    </label>
                    <label>Tamanho (Porte):
                        <input type="text" name="tamanho"/>
                    </label>
                    <label>Nome do dono:
                        <input type="text" name="nomeDono"/>
                    </label>
                    <label>Telefone do dono:
                        <input type="text" name="telDono"/>
                    </label>
                </fieldset>
            </form>
            <div className="painelPets">

                {
                    listaPets.map((p, i) =>
                        <div className="etiquetaPet" key={i}>
                            <p>Nome: {p.nome}</p>
                            <p>Idade: {p.idade}</p>
                            <p>Raça: {p.raca}</p>
                            <p>Tamanho: {p.tamanho}</p>
                            <p>Dono: {p.nomeDono}</p>
                            <p>Telefone do dono: {p.telDono}</p>
                        </div>
                    )
                }
                    
            </div>
        </div>
    )
}