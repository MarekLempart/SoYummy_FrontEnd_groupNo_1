import css from "./RecipeTile.module.css";

const RecipeTile = ({ recipe, onClick }) => {
  return (
    <div className={css.recipeTile} onClick={onClick}>
      <img src={recipe.image} alt={recipe.name} className={css.recipeImage} />
      <div className={css.recipeInfo}>
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
      </div>
    </div>
  );
};

export default RecipeTile;
