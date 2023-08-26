import { useState } from 'react';
import Card from './Card';


function Filters({data}) {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const therapyFilters = ['fluency', 'pragmatics', 'language', 'articulation', 'voice', 'aphasia'];
    const activityFilters = ['games', 'expository text', 'videos', 'stories', 'science'];

    //Keep only the selections that are not included in the specified array (group of tags)
    const resetTherapyFilters = () => {
      setSelectedFilters((prevState) => prevState.filter((selection) => !therapyFilters.includes(selection)))
    }

    const resetActivityFilters = () => {
      setSelectedFilters((prevState) => prevState.filter((selection) => !activityFilters.includes(selection)))
    }
      
  
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
                        <h4>Or filter by tags:</h4>
                        
                        <div>
                        <h5>Therapy type:</h5>
                        {therapyFilters.map((selector) => (
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
                        <button onClick={resetTherapyFilters}>Clear Filters</button>
                        </div>

                        <div>
                        <h5>Activity type:</h5>
                        {activityFilters.map((selector) => (
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
                        <button onClick={resetActivityFilters}>Clear Filters</button>
                        </div>
                        
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




