import React from 'react';
import style from './recipe.module.css';

const Recipe = ({name, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{name}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories} calories</p>
            <img src={image} alt={name}/>
        </div>
    );
}

export default Recipe;