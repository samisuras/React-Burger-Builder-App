import React, {Component} from 'react';
import classes2 from './BurgerIngredient.css';
// import PropTypes from 'prop-types';



export default class BurgerIngredients extends Component {
    render(){
        let ingredients = null;

        console.log(this.props.type);

        switch(this.props.type) {
            case 'bread-bottom': 
                ingredients = (<div className={classes2.BreadBottom}></div>);
                break;
            case 'bread-top':
                ingredients = (
                    <div className={classes2.BreadTop}>
                        <div className={classes2.Seeds1}></div>
                        <div className={classes2.Seeds2}></div>
                    </div>
                );
                break;
            case 'meat': 
                ingredients = <div className={classes2.Meat}></div>;
                break;
            case 'cheese':
                ingredients = <div className={classes2.Cheese}></div>;
                break;
            case 'salad':
                ingredients = <div className={classes2.Salad}></div>;
                break;
            case 'bacon':
                ingredients = (<div className={classes2.Bacon}></div>);
                break;
            default: 
                ingredients = null;
                break;
        }
        return (ingredients);
    }
}
