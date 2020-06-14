import React, { Component } from 'react'
import Aux from '../../../hoc/AuxiliarContainer/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

    render() {

        const ingredientsSummary = Object.keys(this.props.ingredients)
        .map(ig => {
            return (
                <li key={ig}>
                    <span style={{textTransform : 'capitalize'}}>{ig}</span> : {this.props.ingredients[ig]} 
                </li>
            );
                
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A Delicius Burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.canceled} btnType='Danger'>CANCEL</Button>
                <Button clicked={this.props.completed} btnType='Success'>CONTINUE</Button>
            </Aux>
        );
    } 

}

export default OrderSummary;