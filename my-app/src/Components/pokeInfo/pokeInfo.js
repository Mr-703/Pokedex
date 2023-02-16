// import React, { useState } from 'react'
// import Input from '../Input/input'


// const [pokemonInfo, setPokemonInfo] = useState([])
// // const [pokemonTypeImage, setPokemonTypeImage] = useState("")
// const pokemonTypes =
//     [{ background_color: "#aebe2f", type: "bug" },
//     { background_color: "#543d31", type: "dark" },
//     { background_color: "#765fe0", type: "dragon" },
//     { background_color: "#fcba17", type: "electric" },
//     { background_color: "#f3b1f2", type: "fairy" },
//     { background_color: "#80331a", type: "fighting" },
//     { background_color: "#ee3f0d", type: "fire" },
//     { background_color: "#9eacf1", type: "flying" },
//     { background_color: "#5959a7", type: "ghost" },
//     { background_color: "#6ebf2f", type: "grass" },
//     { background_color: "#d3b159", type: "ground" },
//     { background_color: "#90dffa", type: "ice" },
//     { background_color: "#cbc5bf", type: "normal" },
//     { background_color: "#944794", type: "poison" },
//     { background_color: "#ee4881", type: "psychic" },
//     { background_color: "#bba358", type: "rock" },
//     { background_color: "#b5b5c2", type: "steel" },
//     { background_color: "#3291ed", type: "water" }]


// let imageNum = pokemonInfo.id

// const onFormSubmit = e => {
//     e.preventDefault();

// }

// function pokeInfo() {
//     return (
//         <>

//             {JSON.stringify(pokemonInfo) !== "[]" ?
//                 <div className='listPosition'>
//                     <ul>

//                         <li>HP: {pokemonInfo.stats[0].base_stat}</li>
//                         <li>Attack:{pokemonInfo.stats[1].base_stat} </li>
//                         <li>Defense:  {pokemonInfo.stats[2].base_stat}</li>
//                         <li>Special Attack:{pokemonInfo.stats[3].base_stat}</li>
//                         <li>Special Defense:{pokemonInfo.stats[4].base_stat} </li>
//                         <li>Speed:  {pokemonInfo.stats[5].base_stat}</li>



//                     </ul>
//                     <img className="pokemonImage" alt="pokemonImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageNum}.png`}></img>
//                     {pokemonInfo && pokemonInfo.types.map((pokemonObject) => {
//                         let indexOfType = pokemonTypes.findIndex((obj) => obj.type === pokemonObject.type.name)
//                         let pokemonTypeNames = pokemonTypes.map((obj) => obj.type)
//                         console.log(pokemonTypeNames)
//                         return pokemonTypeNames.includes(pokemonObject.type.name) && <button style={{ background: pokemonTypes[indexOfType].background_color }} className="typesImageClass" id="typesImage"   >{pokemonObject.type.name.toUpperCase()}</button>

//                     })}

//                 </div>
//                 :
//                 <p>Press search to see Pokemon Info</p>

//             }
//         </>
//     )
// }
// export default pokeInfo