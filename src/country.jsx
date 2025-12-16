import './country.css'
export default function Country({country})
{
    console.log(country)
    const {name,area,population,flags} = country;
    return(
        <div className="country">
            <img src={flags.flags.png} alt={flags.flags.alt}/>
            <p>Name : {name.common}</p>
            <p>Area : {area.area}</p>
            <p>Population : {population.population} </p>
            <p className="">
                {
                    area.area>250000? `${name.common} is a big country` : `${name.common}
                    is a small country`
                }
            </p>

        </div>
    )
}