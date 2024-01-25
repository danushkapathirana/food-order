import React, { Fragment, useState } from "react"

import Header from "./Layout/Header"
import Meals from "./Meals/Meals"
import Cart from "./Cart/Cart"

const App = () => {
    const[cartIsShown, setCartIsShown] = useState(false)

    const showCartHandler = () => {
        setCartIsShown(true)
    }

    const closeCartHandler = () => {
        setCartIsShown(false)
    }

    return(
        <Fragment>
            {cartIsShown && <Cart onCloseCart={closeCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </Fragment>
    )
}

export default App
