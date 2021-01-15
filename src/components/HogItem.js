import HogImages from "./HogImages"
import React, { useState } from "react"


// debugger

function HogItem({hog}) {
    const [showDetails, setshowDetails] = useState(false)

    const { name, specialty, greased, weight, "highest medal achieved": medal } = hog

    function handleDetails() {
        setshowDetails(!showDetails)
    }
    
    return (
    <div className="ui eight wide column" >
        <div className= "pigTile">
            <h3>{name}</h3>
            <HogImages name={name}/>
            <div> 
               { showDetails ? <ul className="normalText">
                   <li>{specialty}</li>
                   <li>{greased ? "Yup" : "Nope"}</li>
                   <li>{weight} pounds</li>
                   <li className="achievementText">{medal}</li>
               </ul> : null } 
            </div>
            <button onClick= {handleDetails}>Click for Details</button>

        </div>
    </div>
    )
}

export default HogItem;