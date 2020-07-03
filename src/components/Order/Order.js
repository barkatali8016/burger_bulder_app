import React from 'react';
import classes from './Order.module.css';
import Logo from '../../components/Logo/Logo';
const order = (props) => {
    let ingredientArray = []
    for (const ingredientName in props.ingredient) {
        if (props.ingredient.hasOwnProperty(ingredientName)) {
            ingredientArray.push({ name: ingredientName, amount: props.ingredient[ingredientName] })

        }
    }
    const ingredientOutput=ingredientArray.map(ingredient=>( <span key={ingredient.name}>{ingredient.name} ({ingredient.amount})</span>))
    return (
        <ul className={classes.Order}>
            <li>
                <strong>Ingredients: </strong>
               {ingredientOutput}
            </li>
            <li><strong>Price:</strong> USD {parseInt(props.price).toFixed(2)}</li>
            <div className={classes.Logo}>
                <Logo />
            </div>
        </ul>
    )
}
export default order;
