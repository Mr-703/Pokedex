import React, { useState } from 'react'
import Axios from "axios"


function Input() {
    const [searchItem, setsearchItem] = useState("")
    const [pokemonInfo, setPokemonInfo] = useState([])
    // const [pokemonTypeImage, setPokemonTypeImage] = useState("")
    const pokemonTypes = [{ background_color: "#aebe2f", type: "bug" }, { background_color: "#543d31", type: "dark" }, { background_color: "purple", type: "dragon" }, { background_color: "yellow", type: "electric" }, { background_color: "pink", type: "fairy" }, { background_color: "brown", type: "fighting" }, { background_color: "red", type: "fire" }, { background_color: "", type: "flying" }, { background_color: "", type: "ghost" }, { background_color: "", type: "grass" }, { background_color: "", type: "ground" }, { background_color: "", type: "ice" }, { background_color: "", type: "normal" }, { background_color: "", type: "poison" }, { background_color: "", type: "psychic" }, { background_color: "", type: "rock" }, { background_color: "", type: "steel" }, { background_color: "", type: "water" }]

    let text = searchItem;
    let lowerSearch = text.toLowerCase();

    function handleClick(e) {


        //console.log(searchItem)
        let APIcallString = "https://pokeapi.co/api/v2/pokemon/" + lowerSearch


        Axios.get(APIcallString).then(function (response) {
            setPokemonInfo(response.data)
            console.log(response.data.types)
        }).catch(function (error) {
            console.log(error);
        })

    }
    let imageNum = pokemonInfo.id


    const onFormSubmit = e => {
        e.preventDefault();

    }

    return (
        <div>
            <form onSubmit={onFormSubmit} className='buttonInput' >
                <button className='button' value="Add to do" type="submit" onClick={handleClick}></button>
                <input type="text" onChange={(e) =>
                    setsearchItem(e.target.value)}></input>

            </form>
            <>

                {JSON.stringify(pokemonInfo) !== "[]" ?
                    <div className='listPosition'>
                        <ul>

                            <li>HP: {pokemonInfo.stats[0].base_stat}</li>
                            <li>Attack:{pokemonInfo.stats[1].base_stat} </li>
                            <li>Defense:  {pokemonInfo.stats[2].base_stat}</li>
                            <li>Special Attack:{pokemonInfo.stats[3].base_stat}</li>
                            <li>Special Defense:{pokemonInfo.stats[4].base_stat} </li>
                            <li>Speed:  {pokemonInfo.stats[5].base_stat}</li>



                        </ul>
                        <img className="pokemonImage" alt="pokemonImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageNum}.png`}></img>
                        {pokemonInfo && pokemonInfo.types.map((pokemonObject) => {
                            let indexOfType = pokemonTypes.findIndex((obj) => obj.type === pokemonObject.type.name)
                            let pokemonTypeNames = pokemonTypes.map((obj) => obj.type)
                            console.log(pokemonTypeNames)
                            return pokemonTypeNames.includes(pokemonObject.type.name) && < button style={{ background: pokemonTypes[indexOfType].background_color }} className="typesImageClass" id="typesImage"   >{pokemonObject.type.name}</button>

                        })}

                    </div>
                    :
                    <p>Press search to see Pokemon Info</p>

                }
            </>
        </div >

    )
}

export default Input