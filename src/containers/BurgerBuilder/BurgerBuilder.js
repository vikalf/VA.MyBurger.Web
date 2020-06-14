import React, { Component } from 'react';
import Aux from '../../hoc/AuxiliarContainer/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component 
{
    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        canOrder: false,
        showSummary: false
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients : updatedIngredients});
        this.updateCanOrder(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if(oldCount <= 0)
            return;

        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({totalPrice: newPrice, ingredients : updatedIngredients});
        this.updateCanOrder(updatedIngredients);
    };

    updateCanOrder = (ingredients) => {
        
        const sum = Object.keys(ingredients)
        .map(ig => {
            return ingredients[ig];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);

        this.setState({canOrder: sum > 0});
    };

    showSummaryHandler = () => {
        this.setState({showSummary: true});
    }

    cancelSummaryHandler = () => {
        this.setState({showSummary: false});
    };

    completeOrderHandler = () => {
        alert('You Continue!!');
    };

    render() {

        const disabledInfo = {...this.state.ingredients};
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.showSummary} modalClosed={this.cancelSummaryHandler}>
                    <OrderSummary 
                    price={this.state.totalPrice}
                    ingredients= {this.state.ingredients}
                    canceled={this.cancelSummaryHandler}
                    completed={this.completeOrderHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    price= {this.state.totalPrice}
                    disabled={disabledInfo}
                    ingredientAdded = {this.addIngredientHandler} 
                    ingredientRemoved = {this.removeIngredientHandler}
                    canOrder = {this.state.canOrder}
                    showSummary = {this.showSummaryHandler}
                    />
            </Aux>
        );
    };
}

export default BurgerBuilder;
