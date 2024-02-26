import React from "react"
import { Chemical } from "../types/chemical"
const BASE_URL: string = window.location.href
const API_ROOT: string = "/api/v1"
const endpoints = {
    searchQueryEndpoint: "/api/v1/search",
    chemicalRepositoryEndpoint: "/api/v1/chemical"
}
const ID = {
    searchInputElement: "search-input"
}
export const Search = (
    {
        updateParentStateFunction
        
    }: 
    {
        updateParentStateFunction: (chemicals: Array<Chemical>) => void
    }
) => {
    const searchHandler = async() => {
        const text = (document.getElementById(ID.searchInputElement) as HTMLInputElement).value
        const result = await fetch(`${endpoints.searchQueryEndpoint}?keyword=${text}`, {
            method: "GET",
        })
        const responseData: Chemical[] = await result.json() as Chemical[]
        
    }
    return (
        <div className="component-search">
            <span>
                <input id={ID.searchInputElement} placeholder="Your chemical query here..."></input>
                <button onClick={() => {searchHandler()}}></button>
            </span>
        </div>
    )
}