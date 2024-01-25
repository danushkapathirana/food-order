import React, { Fragment } from "react"

import Header from "./Layout/Header"
import Meals from "./Meals/Meals"

const App = () => {
    return(
        <Fragment>
            <Header />
            <main>
                <Meals />
            </main>
        </Fragment>
    )
}

export default App
