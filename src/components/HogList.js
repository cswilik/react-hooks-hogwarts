// import React, { useState } from "React"
import HogItem from './HogItem'
import hogs from "../porkers_data";

function HogList() {
    console.log(hogs)

    // const [ hogItem, setHogItem ] = useState({ name })

    const eachHogItem = hogs.map((hog) => {
        return <HogItem key={hog.name} name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} metal={hog['highest medal achieved']}  />
    })

    return (
        <div className="ui grid container">  
            {eachHogItem}
              
        </div>

    )
}

export default HogList