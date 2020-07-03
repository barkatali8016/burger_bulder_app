import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import BackDrop  from '../../UI/BackDrop/BackDrop';

const sideDrawer=(props)=> {

    let attachClasses=[classes.SideDrawer,classes.Close];
    if(props.show){
        console.log(props.show);
        
        attachClasses=[classes.SideDrawer,classes.Open];
    }
    return (
        <React.Fragment>
            <BackDrop purchasing={props.show} clicked={props.closedSideDrawer} />
        <div className={attachClasses.join(' ')}>
           <div className={classes.Logo}>
           <Logo/>
           </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </React.Fragment>
    )
}
export default sideDrawer