import axios from "axios"
import { useState,useEffect } from "react"


const ImagesSearch = ({setsearchResult}) =>{


    const [searchImg , setsearchImg] = useState('');

    useEffect(()=>{
        searchImage();
    },[])


    async function searchImage(){
     
     await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        "Accept-Version" : "v1",
        "Authorization" : `Client-ID ${process.env.REACT_APP_SPLASH_IMAGEBAZZAR} `
      },
      params:{
        query : searchImg || "random"
      }
    }).then(resp => {
        setsearchResult(resp.data.results);
        setsearchImg('');
    })
    .catch(err =>{
        console.log(err);
    })

    }


    return(

        <div>
          <input type="text" placeholder="Search Img ..." value={searchImg} 
          onChange={(e)=> setsearchImg(e.target.value)} />
          <button onClick={searchImage}>Search Image</button>
        </div>
    )
}

export default ImagesSearch