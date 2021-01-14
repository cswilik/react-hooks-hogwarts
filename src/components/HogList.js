import HogItem from './HogItem'
import hogs from "../porkers_data";

function HogList() {

    const eachHogItem = hogs.map((hog) => {
        return <HogItem name={hog.name} />
    })

    return (
        <div className="ui grid container">
        {eachHogItem} 
        </div>
    )
}

export default HogList