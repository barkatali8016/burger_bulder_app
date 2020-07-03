import React from 'react'
import PropTypes from 'prop-types'
import classes  from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
]
const buildControls=(props)=>{
   
    return (
        <div className={classes.BuildControls}>
           <p>Calculated Price: <strong>{props.burgerPrice.toFixed(2)}</strong></p> 
           {controls.map(ctrl=> <BuildControl 
           key={ctrl.label}
            label={ctrl.label}
            added={()=>props.priceAdded(ctrl.type)}
            removed={()=>props.priceRemoved(ctrl.type)}
            disabled={props.disabledInfo[ctrl.type]}
            />)}
            <button className={classes.OrderButton}
             disabled={!props.purchasable}
             onClick={props.showModalHandle}
             >Order Now</button>
        </div>
    )
}

buildControls.propTypes = {

}

export default buildControls;

