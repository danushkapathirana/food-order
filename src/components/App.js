import React, { Fragment } from "react"

import Header from "./Layout/Header"
import Meals from "./Meals/Meals"
import Cart from "./Cart/Cart"

const App = () => {
    return(
        <Fragment>
            <Cart />
            <Header />
            <main>
                <Meals />
            </main>
        </Fragment>
    )
}

export default App
