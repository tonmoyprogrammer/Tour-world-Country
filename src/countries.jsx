import { use, useState } from "react"
import Country from "./country";
import './countries.css'

export default function Countries({countries})
{
    const getPromise = use(countries)
    const getCountries = getPromise.countries;

    const [visitedCountries,setVisitedCountries] = useState([]);
    const [visitedFlags,setVisitedFlags] = useState([]);
    
    const allVisitedCountries = (country)=>
    {
        const newVisitedCountry = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountry)
    }

    const showVisitedFlags = (flag)=>
    {
       const newFlags = [...visitedFlags,flag];
       setVisitedFlags(newFlags);
    }

    

   
    return(
    <div className="">
       <div className="headers">

         <h1 className="world">Beautiful world</h1>
        <h4 className="total-country">Total country : {getCountries.length}</h4>
        <p className="total-visited-country">Total visited Country : {visitedCountries.length}</p>

         </div>
        <div className="flags">
            
            {
                visitedFlags.map((flag,index)=><img key={index} src={flag}></img>)
            }

        </div>

      
        <div className="countries">
            {
                getCountries.map(country=><Country
                key={country.cca3.cca3} country={country}
                allVisitedCountries={allVisitedCountries}
                showVisitedFlags={showVisitedFlags}
                ></Country>)
            }

        </div>
    </div>

    )
}