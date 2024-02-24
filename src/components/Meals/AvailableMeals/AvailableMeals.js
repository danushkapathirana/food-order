import React, { useEffect, useState } from "react"

import Card from "../../UI/Card"
import MealItem from "../MealItem/MealItem"

import classes from "./AvailableMeals.module.css"

const AvailableMeals = () => {
    const[isLoading, setIsLoading] = useState(false)
    const[error, setError] = useState(null)
    const[meals, setMeals] = useState([])

    const fetchMeals = async() => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch("https://food-order-2c02a-default-rtdb.firebaseio.com/meals.json")

            if(!response.ok) {
                throw new Error("Request failed.!")
            }

            const data = await response.json()
            const loadedMeals = []

            for(const key in data) {
                loadedMeals.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                })
            }
            setMeals(loadedMeals)
        }
        catch(error) {
            setError(error.message || "Something went wrong.!")
        }
        setIsLoading(false)
    }

    const loadingMessage = (
        <section className={classes.MealsLoading}>
            <p>Loading...</p>
        </section>
    )

    const errorMessage = (
        <section className={classes.MealsError}>
            <p>{error}</p>
        </section>
    )

    useEffect(() => {
        fetchMeals()
    }, [])

    return(
        <section className={classes.meals}>
            {isLoading && loadingMessage}
            {error && errorMessage}
            {!isLoading && !error &&
                <Card>
                    <ul>
                        {
                            meals.map((meal) => (
                                <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />
                            ))
                        }
                    </ul>
                </Card>
            }
        </section>
    )
}

export default AvailableMeals
