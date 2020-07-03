import React from 'react';
import logoImage from '../../Assets/Images/logo.png'
import classes from './Logo.module.css'

const logo=() =>{
    return (
        <div className={classes.Logo}>
            <img src={logoImage} alt="logo"/>
        </div>
    )
}
export default logo;