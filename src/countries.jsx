import { use, useState } from "react"
import Country from "./country";
import './countries.css'

export default function Countries({countries})
{
    const getPromise = use(countries)
    const getCountries = getPromise.countries;

    const [visitedCountries,setVisitedCountries] = useState([]);
    
    const allVisitedCountries = (country)=>
    {
        const newVisitedCountry = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountry)
    }

   
    return(
    <div className="">
       <div className="">

         <h1>Beautiful world</h1>
        <h4>Total country : {getCountries.length}</h4>
        <p>Total visited Country : {visitedCountries.length}</p>

       </div>
        <div className="countries">
            {
                getCountries.map(country=><Country
                key={country.cca3.cca3} country={country}
                allVisitedCountries={allVisitedCountries}
                ></Country>)
            }

        </div>
    </div>

    )
}