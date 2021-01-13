import "../style/SearchBar.css"

export default function SearchBar(props) {
    const onInput = event => {
        window.updateURLParams({ filter: event.target.value })
    }
    let urlFilter = window.getURLParam("filter")
    return (
        <div className="search-bar-container">
            <img src="img/search-icon.png" alt="Search icon"></img>
            <input type="text" 
                className="search-bar"
                placeholder="Filter by keyword..."
                onInput={onInput}
                defaultValue={urlFilter}
                autoFocus/>
        </div>
    )
}