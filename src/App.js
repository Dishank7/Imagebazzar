 
 import { useState } from "react"
 import ImagesSearch from "./Component/ImagesSearch"
import ImagesList from "./Component/ImagesList"

const App = () =>{

  const [searchResults , setResults] = useState([]);
  
  return(

    <div>
         <ImagesSearch setsearchResult = {setResults} />
         <ImagesList searchResult = {searchResults} />
    </div>
  )
}

export default App