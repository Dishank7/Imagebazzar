


const ImagesList = ({searchResult}) =>{



    return(
       <div>
        {
                <div>
                {
                    searchResult.map(value => (
                       <img 
                           src={value.urls.thumb} alt={value.alt_description}
                       />
                         
                    ))
                }
            </div>
            }
       </div>
    )
}

export default ImagesList