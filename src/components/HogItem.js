import HogImages from "./HogImages"


// debugger

function HogItem({ name, specialty, greased, weight, metal }) {

    // function handleClick() {
    //     // console.log("hello")
    //     return( 
    //     <fragment>
    //         <h3>{ specialty }</h3>
    //         <h3>{ greased }</h3>
    //         <h3>{ weight }</h3>
    //         <h3>{ metal }</h3>
    //     </fragment>
    //     )
    // }

    return (
        <div id={name} className="ui eight wide column" >
            <h3>{name}</h3>
            
            {/* <p>{returnHog}</p> */}
            <HogImages name= {name}
                specialty = { specialty }
                greased = { greased }
                weight = { weight }
                metal = { metal }
            />
        </div>
    )
}

export default HogItem;