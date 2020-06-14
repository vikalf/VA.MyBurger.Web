import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const buildControls = (props) =>  {

    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'},
    ];


    const buildControls = controls.map((c, i) => {

        const disabled = props.disabled[c.type];

        return <BuildControl 
        key={c.label} 
        label={c.label}
        disabled={disabled}
        added= {() => props.ingredientAdded(c.type)}
        removed = {() => props.ingredientRemoved(c.type)}/>
    });

    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
            {buildControls}
            <button onClick={props.showSummary} disabled={!props.canOrder} className={classes.OrderButton}>ORDER NOW</button>
        </div>
    );

};

export default buildControls