
import './App.css'

const fetchObject = async()=>
  {
    const res = await fetch("https://openapi.programming-hero.com/api/all")
    const data = await res.json()
    return data;
  }

function App() {

  const getFetchObject = fetchObject();
  console.log(getFetchObject)
  return (
    <>
     
     
    </>
  )
}

export default App
