import { useState, useEffect } from "react";
import { getCategories } from "../../utils/utilities";


const MovieCategory = () =>{
    const [selectedGenre, setSelectedGenre] =  useState("");
    const [genre, setGenre] = useState([]);

    useEffect(()=>{
        fetchGenres();
    }, []);


    const fetchGenres = async ()=>{
        try{
            const results = await getCategories();
           setSelectedGenre(results.results);

        }catch(error){
            console.error("Error fetching genres:",error.message);
        }
        
    };

    const handleGenreChange = async(categoryId, categoryName)=>{
        setSelectedGenre(categoryName, categoryId);

        
    }

    return(
        <div>
            {genre.map((category)=>(
                <button key={category.id}
                 onClick={()=>handleGenreChange(category.id, category.name)} className={selectedGenre === category.name ? "active" : ""}>
                    {category.name}
                    

                </button>
            ))}
        </div>
    )

}
export default MovieCategory;