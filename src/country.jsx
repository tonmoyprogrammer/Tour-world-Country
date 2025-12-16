import { useState } from 'react';
import './country.css'
export default function Country({country})
{
    const {name,area,population,flags} = country;
    const [visited,setVisited] = useState(false);
    const handleVisited = ()=>
    {
        if(visited)
        {
            setVisited(false)
        }
        else{
            setVisited(true)
        }
    }
    return(
        <div className="country">
            <img src={flags.flags.png} alt={flags.flags.alt}/>
            <p className='country-name'>Name : {name.common}</p>
            <p className='area'>Area : {area.area}</p>
            <p className='population'>Population : {population.population} </p>
            <p className="big-small">
                {
                    area.area>250000? `${name.common} is a big country` : `${name.common}
                    is a small country`
                }
            </p>
            <button onClick={handleVisited}>
                {
                    visited?"Visited" : "Not visited"
                }
            </button>

        </div>
    )
}