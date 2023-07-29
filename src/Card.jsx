
function Card ({title, description, link}) {
    
    
    return (
        
        <>       
            <article className="card" id="resource">
                <h3><a id="title" href={link} target="_blank">{title}</a></h3>
                <p id="description">{description}</p>

                <div id="tagsContainer">
                    <ul>
                        <li>videos</li>
                        <li>language</li>
                        <li>pragmatics</li>
                    </ul>
                </div>

            </article>

        </>
    )

    


}

export default Card