import React, { useContext, useEffect } from "react"
import { AnimalContext } from "../animal/AnimalProvider.js";
import { CustomerContext } from "./CustomerProvider";
import "./Customers.css"

export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)
    const { animals, getAnimals } = useContext(AnimalContext)

    useEffect(() => {
        getCustomers().then(getAnimals)
    }, [])

    return (
        <div style={{ margin: "0rem 3rem"}}>
            <h1>Customers</h1>
            <article className="customers">
                {
                    customers.map(customer => {
                        customer.animals = animals.filter(a => customer.id === a.customerId) || []
                        return <section key={customer.id} className="customer">
                            <h2>{customer.name}</h2>
                            <div>{customer.address}</div>

                            <h4>Animals</h4>
                            { customer.animals && customer.animals.map(a => <div key={`animal--${a.id}`}>{a.name} ({a.breed})</div>)}
                        </section>
                    })
                }
            </article>
        </div>
    )
}
