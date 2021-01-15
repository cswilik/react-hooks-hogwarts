import React, { useState } from "react"
import HogFilter from './HogFilter'
import HogItem from './HogItem'

function HogList({ hogs}) {
    const [isGreased, setIsGreased] = useState(false);
    const [sortBy, setSortBy] = useState("weight")


const filteredHogs = hogs.filter(hog =>{
    // if the variable is TRUE
    // returned all hogs that are greased (just hogs.greased)
    // else, return "true", meaning just return each hog that exits (i.e. is "true")
    if (isGreased) {
        return hog.greased
    } else {
        return true
    }   
}).sort( (hogA, hogB) => {
    if (sortBy === "weight") {
    return hogA.weight - hogB.weight
    } else {
        return  hogA.name.localeCompare(hogB.name)
    }
}).map((hog) => {
    return <HogItem key={hog.name} hog={hog}  />
})




    return (
        <div className="ui grid container"> 
            <HogFilter isGreased={isGreased} 
            setIsGreased={setIsGreased}
            setSortBy={setSortBy}/> 
            {filteredHogs}      
        </div>

    )
}

export default HogList