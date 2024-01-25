import React from "react"

import classes from "./Input.module.css"

const Input = React.forwardRef((props, ref) => {
        return(
            <div className={classes.input}>
                <label htmlFor={props.input.id}>{props.label}</label>
                <input {...props.input} ref={ref} />
            </div>
        )
    }
)

export default Input


/**
 * note
 * 
 * forwardRef helps pass a "reference" from a parent to a child,
 * allowing the parent to interact with or modify something inside the child component
 * 
 * Input.js => child component
 * MealItemForm.js => parent component
 */
