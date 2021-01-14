import HogImages from "./HogImages"


// debugger

function HogItem({ name, specialty, greased, weight, metal }) {

    function handleClick() {
        const otherInfo = <p>{specialty}</p>
        return(
        otherInfo
        
        )}

    return (
        <div id={name} className="ui eight wide column" onClick={handleClick}>
            <h3>{name}</h3>
            {otherInfo}
            <HogImages name= {name}/>
        </div>
    )
}

export default HogItem;