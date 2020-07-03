import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button/Button';

const orderSumary=(props) =>{
let ingredientSummary=Object.keys(props.ingredient).map((igKey,i)=>{
    return (
        <li key={igKey+i}>
            <span style={{textTransform:'capitalize'}}>{igKey}:</span>{props.ingredient[igKey]}
        </li>)
})
    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious Burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price:{props.burgerPrice.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinue}>CONTINUE</Button>
        </React.Fragment>
    )
}

orderSumary.propTypes = {

}

export default orderSumary

