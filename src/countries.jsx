import { use } from "react"
import Country from "./country";
import './countries.css'

export default function Countries({countries})
{
    const getPromise = use(countries)

    const getCountries = getPromise.countries;

   
    return(
    <div className="">
        <h1>Beautiful world</h1>
        <h4>Total country : {getCountries.length}</h4>

        <div className="countries">
            {
                getCountries.map(country=><Country
                country={country}
                ></Country>)
            }

        </div>
    </div>

    )
}