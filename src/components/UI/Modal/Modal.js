import React from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';
import Backdrop from '../BackDrop/BackDrop';

const modal=(props)=> {
    return (
        <React.Fragment>
        <Backdrop purchasing={props.purchasing} clicked={props.modalClosed}/>
        <div 
            className={classes.Modal}
            style={{transform:props.purchasing?'translateY(0)':'translateY(-100vh)',
            opacity:props.purchasing?'1':'0'}}
        >
            {props.children}
        </div>
        </React.Fragment>
    )
}

modal.propTypes = {

}

export default modal;

