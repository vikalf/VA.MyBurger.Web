import React, { Component } from 'react'
import Aux from '../AuxiliarContainer/Aux'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer'

class Layout extends Component {

    state = {
        showSidedrawer : false
    }

    ToggleSidedrawerHandler = () => {
        this.setState((prevState) => {
            return {showSidedrawer: !prevState.showSidedrawer}
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar toggle={this.ToggleSidedrawerHandler}/>
                <Sidedrawer opened={this.state.showSidedrawer} toggle={this.ToggleSidedrawerHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
    
};

export default Layout;