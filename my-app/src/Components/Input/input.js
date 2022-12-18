import React, { useState } from 'react'
import Axios from "axios"


function Input() {
    const [searchItem, setsearchItem] = useState("")
    // const API_KEY = "33eb3c70"
    const [pokemonInfo, setPokemonInfo] = useState([])



    function handleClick() {


        //console.log(searchItem)
        let APIcallString = "https://pokeapi.co/api/v2/pokemon/" + searchItem


        Axios.get(APIcallString).then(function (response) {
            setPokemonInfo(response.data)
            console.log(response)
        }).catch(function (error) {
            console.log(error);
        })

    }
    let imageNum = pokemonInfo.id


    return (
        <div>
            <input type="text" placeholder="Pokemon Name" onChange={(e) =>
                setsearchItem(e.target.value)}></input>
            <button onClick={handleClick}>Search</button>
            <>
                {JSON.stringify(pokemonInfo) !== "[]" ?
                    <>

                        <p>HP: {pokemonInfo.stats[0].base_stat}</p>
                        <p>Attack:{pokemonInfo.stats[1].base_stat} </p>
                        <p>Defense:  {pokemonInfo.stats[2].base_stat}</p>
                        <p>Special Attack:{pokemonInfo.stats[3].base_stat}</p>
                        <p>Special Defense:{pokemonInfo.stats[4].base_stat} </p>
                        <p>Speed:  {pokemonInfo.stats[5].base_stat}</p>
                        <img className="pokemonImage" alt="pokemonImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageNum}.png`}></img>

                    </>
                    :
                    <p>Press search to see Pokemon Info</p>

                }
            </>
        </div>

    )
}

export default Input