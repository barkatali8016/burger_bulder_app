import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckOutSummary.module.css'
const  checkOutSummary=(props)=>{
    return (
        <div className={classes.CheckOutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width:'100%',margin:'auto'}}>
                <Burger ingredient={props.ingredient}/>
            </div>
            <Button 
                btnType='Danger'
                clicked={props.checkOutCancel}
            >CANCEL</Button>
            <Button 
                btnType='Success'
                clicked={props.checkOutContinue}
            >Continue?</Button>
        </div>
    )
}
export default checkOutSummary;