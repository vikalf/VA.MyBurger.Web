import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Button from  '../../UI/Button/Button'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.DrawerToggle}>
            <Button clicked={props.toggle}>MENU</Button>        
        </div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);
export default toolbar;