import React from 'react';
import classes from './Burguer.css';
import BurguerIngredients from './BurgerIngredients/BurgerIngredients';

export default function Burger(props) {
    return (
        <div className={classes.Burguer}>
            <BurguerIngredients type="bread-top" />
            <BurguerIngredients type="cheese" />
            <BurguerIngredients type="meat" />
            <BurguerIngredients type="bread-bottom" />
        </div>
    )
}
