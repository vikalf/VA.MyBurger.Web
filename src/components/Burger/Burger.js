import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

    const ingredientKeys = Object.keys(props.ingredients);
    let transformedIngredients = ingredientKeys
    .map((ingredient) => {
        return [...Array(props.ingredients[ingredient])].map((_, index) => {
            return <BurgerIngredient key={ingredient + index} type={ingredient} />
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);


    if(transformedIngredients.length === 0){
        transformedIngredients = <div>Please Start Adding Ingredients</div>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;