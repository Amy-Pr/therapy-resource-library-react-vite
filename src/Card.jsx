
function Card ({selectedFilters, searchTerm, title, description, link, tags}) {

    const tagName = tags.map(tag => {
        return <li>{tag}</li>
    })

    //Checks to see if state is empty (if so, shows all cards) or if a card's tag name is included in state, if so returns true.
    const matchesFilters = selectedFilters.length === 0 || tags.some((tag) => selectedFilters.includes(tag));

    //Checks whether title or description matches search term input
    const matchesSearch =
        searchTerm === '' ||
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        description.toLowerCase().includes(searchTerm.toLowerCase());

    const displayCard = matchesFilters && matchesSearch;
    

    if (!displayCard) {
        return null;
    } else {
        return (
    
            <>       
                <article className="card" id="resource">
                    <h3><a id="title" href={link} target="_blank">{title}</a></h3>
                    <p id="description">{description}</p>
    
                    <div id="tagsContainer">
                        <ul>
                            {tagName}
                        </ul>
                    </div>
    
                </article>
    
            </>
        )

    }

}

    

export default Card