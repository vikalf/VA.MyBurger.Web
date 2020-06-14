import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './Sidedrawer.css'
import Aux from '../../../hoc/AuxiliarContainer/Aux'

const sidedrawer = (props) => {
    let attachedClasses = [classes.Sidedrawer, classes.Close];

    if(props.opened) {
        attachedClasses = [classes.Sidedrawer, classes.Open];
    }

    return(
        <Aux>
            <Backdrop show={props.opened} clicked={props.toggle}></Backdrop>
                <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
        
    );
}

export default sidedrawer;