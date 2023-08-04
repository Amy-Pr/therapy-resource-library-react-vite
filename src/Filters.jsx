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

    //TODO: For accessibility I will want to use more than just color to indicate checked/unchecked status
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

                        {['all', 'games', 'fluency', 'pragmatics', 'stories', 'expository text', 'language', 'articulation', 'science', 
                        'videos', 'voice', 'aphasia'].map((selector) => (
                            <label key={selector} className={updateCheckedStyles(selector)}>
                                {selector}
                                <input 
                                  className="selector" 
                                  name={selector} 
                                  checked={selectedFilters.includes(selector)} 
                                  type="checkbox" 
                                  onChange={handleFilterSelection}/>
                            </label> 

                        ))}

                            {/* <label className={updateCheckedStyles("all")}>all
                              <input className="tag" name="all" checked={selectedFilters.includes('all')} type="checkbox" onChange={handleFilterSelection}/>
                            </label> 
                            <label className={updateCheckedStyles("games")}> games
                              <input className="tag" name="games" checked={selectedFilters.includes('games')} type="checkbox" onChange={handleFilterSelection}/>
                            </label> 
                           */}

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




