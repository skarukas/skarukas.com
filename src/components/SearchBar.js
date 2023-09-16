import "../style/SearchBar.css"

export default function SearchBar(props) {
    const onInput = event => {
        let v = event.target.value || null
        window.updateURLParams({ filter: v })
    }
    let urlFilter = window.getURLParam("filter")
    return (
        <div className="search-bar-container">
            <img src="img/search-icon.png" alt="Search icon"></img>
            <input type="text" 
                className="search-bar"
                placeholder={props.placeholder || "Filter by keyword..."}
                onInput={onInput}
                defaultValue={urlFilter}/>
        </div>
    )
}