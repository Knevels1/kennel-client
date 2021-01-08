import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"

export const AnimalSearch = () => {
    const { setTerms } = useContext(AnimalContext)

    return (
        <>
            <div>Search for an animal</div>
            <input type="text" className="animals__search"
                onChange={
                    (changeEvent) => {
                        setTerms(changeEvent.target.value)
                    }
                }
                placeholder="Enter search string here..." />
        </>
    )
}