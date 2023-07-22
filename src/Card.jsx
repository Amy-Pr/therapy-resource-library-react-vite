
function Card () {

    return (
        /*Possibly change to simple div and ul-li stucture, per Karla's code*/
        <>       
            <article class="card" id="resource">
                <h3><a id="title" href="" target="_blank">Resource Title</a></h3>
                <p id="description">This would be my one to two line description of the website</p>

                <div id="tagsContainer">
                    <span class="tag">videos</span>
                    <span class="tag">language</span>
                    <span class="tag">pragmatics</span>
                </div>

            </article>

        </>
    )




}

export default Card