import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './Sidedrawer.css'
import AuxContainer from '../../../hoc/AuxiliarContainer/AuxContainer'

const sidedrawer = (props) => {
    let attachedClasses = [classes.Sidedrawer, classes.Close];

    if(props.opened) {
        attachedClasses = [classes.Sidedrawer, classes.Open];
    }

    return(
        <AuxContainer>
            <Backdrop show={props.opened} clicked={props.toggle}></Backdrop>
                <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </AuxContainer>
        
    );
}

export default sidedrawer;