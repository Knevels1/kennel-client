import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider.js"
import { CustomerList } from "./customer/CustomerList.js"
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeForm } from "./employee/EmployeeForm.js"
import { AnimalForm } from "./animal/AnimalForm.js"
import { EmployeeDetail } from "./employee/EmployeeDetail.js"
import { LocationDetail } from "./location/LocationDetail.js"
import { AnimalDetails } from "./animal/AnimalDetail.js"
import { AnimalSearch } from "./animal/AnimalSearch.js"

export const ApplicationViews = () => {
    return (
        <>
            <LocationProvider>
                <EmployeeProvider>
                    <AnimalProvider>
                        <Route exact path="/">
                            <LocationList />
                        </Route>

                        <Route path="/locations/:locationId(\d+)" render={
                            props => <LocationDetail {...props} />
                        } />
                    </AnimalProvider>
                </EmployeeProvider>
            </LocationProvider>

            <AnimalProvider>
                <CustomerProvider>
                    <LocationProvider>
                        <Route exact path="/animals" render={(props) => {
                            return <>
                                <main className="animalContainer">
                                    <h1>Animals</h1>

                                    <AnimalSearch />
                                    <AnimalList history={props.history} />
                                </main>

                            </>
                        }} />

                        <Route exact path="/animals/create" render={(props) => {
                            return <AnimalForm {...props} />
                        }} />

                        <Route path="/animals/:animalId(\d+)" render={
                            props => <AnimalDetails {...props} />
                        } />

                        <Route path="/animals/edit/:animalId(\d+)" render={
                            props => <AnimalForm {...props} />
                        } />
                    </LocationProvider>
                </CustomerProvider>
            </AnimalProvider>

            <CustomerProvider>
                <AnimalProvider>
                    <Route path="/customers">
                        <CustomerList />
                    </Route>
                </AnimalProvider>
            </CustomerProvider>

            <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("kennel_customer")
                    props.history.push("/login")
                }
            } />

            <EmployeeProvider>
                <AnimalProvider>
                    <LocationProvider>
                        <Route path="/employees/create" render={(props) => {
                            return <EmployeeForm {...props} />
                        }} />


                        <Route path="/employees/:employeeId(\d+)" render={
                            props => <EmployeeDetail {...props} />
                        } />
                    </LocationProvider>
                </AnimalProvider>
            </EmployeeProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees" render={(props) => {
                        return <EmployeeList history={props.history} />
                    }} />
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}