import React, { useRef, useState } from "react"

import classes from "./Checkout.module.css"

const isEmpty = value => value.trim() === ""
const isFiveChars = value => value.trim().length === 5

const Checkout = (props) => {
    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalInputRef = useRef()
    const cityInputRef = useRef()
    const[formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        postal: true,
        city: true
    })

    const confirmHandler = (event) => {
        event.preventDefault()

        const enteredName = nameInputRef.current.value
        const enteredStreet = streetInputRef.current.value
        const enteredPostal = postalInputRef.current.value
        const enteredCity = cityInputRef.current.value

        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredStreetIsValid = !isEmpty(enteredStreet)
        const enteredPostalIsValid = isFiveChars(enteredPostal)
        const enteredCityIsValid = !isEmpty(enteredCity)

        setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            postal: enteredPostalIsValid,
            city: enteredCityIsValid
        })

        const formValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid

        if(!formValid) {
            return
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostal,
            city: enteredCity
        })
    }

    const nameControlClass = `${classes.control} ${formInputValidity.name ? "" : classes.invalid}`
    const streetControlClass = `${classes.control} ${formInputValidity.street ? "" : classes.invalid}`
    const postalControlClass = `${classes.control} ${formInputValidity.postal ? "" : classes.invalid}`
    const cityControlClass = `${classes.control} ${formInputValidity.city ? "" : classes.invalid}`

    return(
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClass}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef} />
                {!formInputValidity.name && <p>Please enter a valid name</p>}
            </div>

            <div className={streetControlClass}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef} />
                {!formInputValidity.street && <p>Please enter a valid street</p>}
            </div>

            <div className={postalControlClass}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" ref={postalInputRef} />
                {!formInputValidity.postal && <p>Please enter a valid postal code</p>}
            </div>

            <div className={cityControlClass}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
                {!formInputValidity.city && <p>Please enter a valid city</p>}
            </div>

            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit} type="submit">Confirm</button>
            </div>
        </form>
    )
}

export default Checkout
