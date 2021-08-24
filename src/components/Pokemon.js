import react, {useEffect, useState} from 'react';

const Pokemon = (props) => {

    const [poke, setPoke] = useState({});

    const buttonClick = () => {
            fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
                .then(response => response.json())
                .then(response => setPoke(response.results))
        }

    return (
        <div className="container">
            <button onClick={buttonClick} className="btn btn-secondary mt-5">Fetch Pokemon</button>
            <p>
                {poke.length > 0 && poke.map((item, index)=>{
                return (<li key={index}>{item.name}</li>)
            })}
            </p>
        </div>
    )
}

export default Pokemon;