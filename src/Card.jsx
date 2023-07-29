
function Card ({title, description, link, tags}) {
    
    const tagName = tags.map(tag => {
        return <li>{tag}</li>
    })

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

export default Card