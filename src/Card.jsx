
function Card ({selectedFilters, title, description, link, tags}) {

    const tagName = tags.map(tag => {
        return <li>{tag}</li>
    })

    //Checks to see if a card's tag name is included in the selectedFilters array, if so returns true
    const displayCard = tags.some((tag) => selectedFilters.includes(tag));


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