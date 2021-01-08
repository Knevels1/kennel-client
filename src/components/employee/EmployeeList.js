import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Link } from "react-router-dom"
import "./Employees.css"

export const EmployeeList = props => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <div style={{ margin: "0rem 3rem"}}>
            <h1>Employees</h1>

            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>

            <article className="employees">
                {
                    employees.map(employee => {
                        return <section className="employee" key={employee.id}>
                            <Link to={`/employees/${employee.id}`}>
                                <h3>{employee.name}</h3>
                            </Link>
                        </section>
                    })
                }
            </article>
        </div>
    )
}