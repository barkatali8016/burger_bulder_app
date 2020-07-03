import React from 'react'
import PropTypes from 'prop-types'
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
    let transformIngredient = Object.keys(props.ingredient)
        .map(igKey => {
            return [...Array(props.ingredient[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        }).reduce((arr,el)=>{
            return arr.concat(el);
        },[]);
    if(transformIngredient.length===0){
        transformIngredient=<p>Please add some ingredient.</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformIngredient}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

burger.propTypes = {
    ingredient: PropTypes.object.isRequired
}

export default burger;

