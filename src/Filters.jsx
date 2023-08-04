import { useState } from 'react';
import { useRef } from 'react';
import Card from './Card';


function Filters({data}) {
    const [selectedFilters, setSelectedFilters] = useState([])

  
    const handleFilterSelection = (e) => {
        
        const filterName = e.target.name;
        //If the filter chip is selected, place the name in state array, otherwise keep only the values that do NOT equal that filter name
        if (e.target.checked) {
          setSelectedFilters((prevState) => [...prevState, filterName,]);
          
        } else {
          setSelectedFilters((prevState) => prevState.filter((selection) => selection !== filterName))
         
        }
       
    }

    const updateCheckedStyles = (selection) => {
      return selectedFilters.includes(selection) ? 'checked-styles' : 'unchecked-styles' ; 
    };

    
    return (
        <>
            <section className="resources">

              <div className="filters">

                    <input type="text" className="" placeholder="Search by name" />
                    
                    <div className="">
                        <h4>Or filter by category:</h4> 
                        {/* TODO: Add controlled components (checkboxes) along with refactoring the labels */}
                            <label className={updateCheckedStyles("all")}>all
                              <input className="tag" name="all" checked={selectedFilters.includes('all')} type="checkbox" onChange={handleFilterSelection}/>
                            </label> 
                            <label className={updateCheckedStyles("games")}>games
                              <input className="tag" name="games" checked={selectedFilters.includes('games')} type="checkbox" onChange={handleFilterSelection}/>
                            </label> 
                            <label>fluency
                              <input className="tag" name="fluency" type="checkbox"/>
                            </label> 
                            <label className={updateCheckedStyles("pragmatics")}>pragmatics
                              <input className="tag" name="pragmatics" checked={selectedFilters.includes('pragmatics')} type="checkbox" onChange={handleFilterSelection}/>
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
                  selectedFilters={selectedFilters}
                />

              ))}


        </>
    )
}

export default Filters




