import { useState, useEffect } from 'react';
import Card from './Card';


function Filters({data, loading}) {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    

    //FILTER OPTIONS
    const therapyFilters = ['fluency', 'pragmatics', 'language', 'articulation', 'voice', 'aphasia'];
    const activityFilters = ['games', 'expository text', 'videos', 'stories', 'science'];

    
   //Updates selectedFilters state based on user input
    const handleFilterSelection = (e) => {   
        const filterName = e.target.name;
        //If the filter chip is selected, place the name in state array, otherwise keep only the values that do NOT equal that filter name
        if (e.target.checked) {
          setSelectedFilters((prevState) => [...prevState, filterName,]);
          
        } else {
          setSelectedFilters((prevState) => prevState.filter((selection) => selection !== filterName))
         
        }
       
    }

    //Clear buttons: Keeps only the selections that are not included in the specified array (group of tags)
    const resetTherapyFilters = () => {
      setSelectedFilters((prevState) => prevState.filter((selection) => !therapyFilters.includes(selection)))
    }

    const resetActivityFilters = () => {
      setSelectedFilters((prevState) => prevState.filter((selection) => !activityFilters.includes(selection)))
    }
      
    const clearSearch = () => {
      setSearchTerm('');
    }

    // Filters the data array based on selected filters and search terms
    const filteredData = data.filter(({ title, description, tags }) => {
      //Checks to see if state is empty (if so, shows all cards) or if a card's tag name is included in state, if so returns true.
      const matchesFilters = selectedFilters.length === 0 || tags.some((tag) => selectedFilters.includes(tag)); 
      //Checks whether title or description matches search term input
      const matchesSearch =
          searchTerm === '' ||
          title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          description.toLowerCase().includes(searchTerm.toLowerCase());
      //Only keeps the cards in the array that statisfies these two conditions
      return matchesFilters && matchesSearch;
  });

    let counter = filteredData.length

    //TODO: For accessibility I will want to use more than just color to indicate checked/unchecked status
    const updateCheckedStyles = (selection) => {
      return selectedFilters.includes(selection) ? 'checked-styles' : 'unchecked-styles' ; 
    };

    //TODO: For UX, consider instead of "filter" terminology, use "search by tags" and "clear selection"
    return (
        <>
            <section className="resources">

              <div className="filters">

                    <input 
                      type="text" 
                      className="" 
                      placeholder="Search by keyword" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      />

                      <button onClick={clearSearch}>clear</button>
                    
                    {/* TODO: Maybe make this it's own component? Down to line 129? */}
                    <div className="">
                        <h4>Filter by tags:</h4>
                        
                        <div className="filter-div">
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

                        <div className="filter-div">
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

                <h5>Results: {counter}</h5>

            </section>
              
            <section id="cards-section">
            
            {
              (loading) ? <p>Loading...</p> : 
              filteredData.length === 0 ? (
              <p>No results found. Try a new keyword or clearing more filters.</p>
              ) : (
              filteredData.map( ({title, id, description, link, tags}) => (
                  <Card 
                    title={title} 
                    key={id} 
                    description={description} 
                    link={link}
                    tags={tags}
                  />
              ))
            
            )}

            </section>

        </>
    )
}

export default Filters




