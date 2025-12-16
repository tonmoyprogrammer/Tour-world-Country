import Countries from './countries'
import './App.css'
import { Suspense } from 'react'

const fetchObject = async()=>
  {
    const res = await fetch("https://openapi.programming-hero.com/api/all")
    const data = await res.json()
    return data;
  }

function App() {

  const getFetchObject = fetchObject();
  
  return (
    <>
     <Suspense fallback={<p>Data loading...............</p>}>
    <Countries countries={getFetchObject}>

    </Countries>
     </Suspense>
     
    </>
  )
}

export default App
