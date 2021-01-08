import React from "react"
import "./Locations.css"

export const LocationDetail = (props) => {
    return (
        <section className="location">
            <h2 className="location__name">{props.location.state.chosenLocation.name}</h2>
            <address className="location__address">{props.location.state.chosenLocation.address}</address>
            <div>
                <h4>Employees</h4>
                { props.location.state.chosenLocation.employees.map(e => e.name).join(", ") }
            </div>
            <div>
                <h4>Current Residents</h4>
                {
                    props.location.state.chosenLocation.animals.map(a => a.name).join(", ")
                }
            </div>
        </section>
    )
}