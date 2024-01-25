import React, { useState } from "react"

import Header from "./Layout/Header"
import Meals from "./Meals/Meals"
import Cart from "./Cart/Cart"
import CartProvider from "../store/CartProvider"

const App = () => {
    const[cartIsShown, setCartIsShown] = useState(false)

    const showCartHandler = () => {
        setCartIsShown(true)
    }

    const closeCartHandler = () => {
        setCartIsShown(false)
    }

    return(
        <CartProvider>
            {cartIsShown && <Cart onCloseCart={closeCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    )
}

export default App
