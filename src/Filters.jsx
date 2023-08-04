import { useState } from 'react';
import Card from './Card';


function Filters({data}) {
    const [selectedFilters, setSelectedFilters] = useState([])

    const handleFilterSelection = (e) => {
        const filterName = e.target.name;
        setSelectedFilters((prevState) => [...prevState, filterName,]);

    }

    //set state to an empty array that will hold the names of the selected checkboxes
    //Onclick (when checked) push the name of the checkbox to the state array
    //When unchecked remove the name from the state array

    //If any of the names in the state array match any of the tagName list items in a card, show that card


    return (
        <>
            <section className="resources">

              <div className="filters">

                    <input type="text" className="" placeholder="Search by name" />
                    
                    <div className="">
                        <h4>Or filter by category:</h4> 
                        
                            <label>all
                              <input className="tag" name="all" type="checkbox" onChange={handleFilterSelection}/>
                            </label> 
                            <label>games
                              <input className="tag" name="games" type="checkbox" onChange={handleFilterSelection}/>
                            </label> 
                            <label>fluency
                              <input className="tag" name="fluency" type="checkbox"/>
                            </label> 
                            <label>pragmatics
                              <input className="tag" name="pragmatics" type="checkbox"/>
                            </label> 
                            <label>stories
                              <input className="tag" name="stories" type="checkbox"/>
                            </label> 
                            <label>expository text
                              <input className="tag" name="expository text" type="checkbox"/>
                            </label> 
                            <label>language
                              <input className="tag" name="language" type="checkbox"/>
                            </label> 
                            <label>articulation
                              <input className="tag" name="articulation" type="checkbox"/>
                            </label> 
                            <label>science
                              <input className="tag" name="science" type="checkbox"/>
                            </label> 
                            <label>videos
                              <input className="tag" name="videos" type="checkbox"/>
                            </label> 
                            <label>voice
                              <input className="tag" name="voice" type="checkbox"/>
                            </label> 
                            <label>aphasia
                              <input className="tag" name="aphasia" type="checkbox"/>
                            </label> 

                    </div>

                </div>
            </section>
              
              {/* May add outer container div for flex styling here */}

            {data.map( ({title, id, description, link, tags}) => (
                <Card 
                  title={title} 
                  key={id} 
                  description={description} 
                  link={link}
                  tags={tags}
                />

              ))}


        </>
    )
}

export default Filters




