import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => 
        {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
           return <BurgerIngredient key={igKey+1}type= {igKey}/>
        }); //object of key value pairs into burger ingredients
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        },[]);

        if(transformedIngredients.length===0){
            transformedIngredients = <p>Please start adding Ingredients! </p>
        }

    return (
        <div  className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>

        </div>
    );

}

export default Burger;
