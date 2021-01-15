function HogFilter({isGreased, setIsGreased, setSortBy}) {

    function handleGreaseToggle() {
        setIsGreased(!isGreased)
        console.log(isGreased)
    }
    function handleSort(evt) {
        setSortBy(evt.target.value)
    }
    return (
    <div>
        <label>GREASED PIGGIES ONLY
        <input type="checkbox" checked={isGreased} onChange={handleGreaseToggle}/>
        </label>
        
        <select onChange={handleSort}>
        <option value="weight">Weight</option>
        <option value="name">Name</option>
        </select>

    </div>
    )
}

export default HogFilter;