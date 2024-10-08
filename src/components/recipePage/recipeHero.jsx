import { useState, useEffect } from "react";
import { addFavoriteRecipe } from '../../API/api'
import css from '../../styles/RecipeHero.module.css'
import clock from '../../assets/clock.svg'

const RecipeHero = ({element})=>{
    const [title, setTitle]=useState()
    const [descrition, setDescription]=useState()
    const [time, setTime] = useState()
    
    const onClick = (e) => {
        e.preventDefault()
        const id = (element.downloadedRecipe.newdata2._id)
        const data = { "recipeId": id }
        
        addFavoriteRecipe(data)
        .then((response) => {
    console.log("Add to favorites", response);
  })
  .catch((error) => {
    console.error("Błąd dodania przepisu:", error);
  });
    }

    useEffect(() => {
        if (element.downloadedRecipe) {
            console.log(element.downloadedRecipe.newdata2)
            setTitle(element.downloadedRecipe.newdata2.title)
            setDescription(element.downloadedRecipe.newdata2.description)
            setTime(element.downloadedRecipe.newdata2.time)
    }}, [element]); 

    return (
        <>
        <div className={css.div}>
            <div className={css.sectionTitle}>{title}</div>
            <div className={css.sectionText}>{descrition}</div>
            <button className={css.button} type="button" onClick={onClick}>Add to favorite recipes</button>
                <div className={css.time}>
                    <img className={css.clock} src={clock} alt='clock'></img>
                    <p>{time} min</p></div> 
         </div>          
        </>
    )
}

export default RecipeHero