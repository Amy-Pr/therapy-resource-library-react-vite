import { useState } from 'react';
import './App.css';
import Card from './Card';


function App({data}) {
  console.log(data);
  const [] = useState()

  return (
    <>
    
      <h1> The Speech and Language <br/>
                 Teletherapy Resource Library</h1>
                 

            <section className="intro">
                <div className="overview">
                    <h2>Welcome to the Library</h2>
                    <p>Below is a curated collection of online resources that I've collected over 5 years as a speech-language pathologist serving
                        schools and private clients in teletherapy. The library is in its beta version and new and improved functions are on the way!
                    </p>
                </div>
            </section>


            <section className="resources">
              <div className="filters">
                    <input type="text" className="" placeholder="Search by name" />
                    
                    <div className="">
                        <h4>Or filter by category:</h4> 
                        
                            <label>all
                              <input className="tag" name="all" type="checkbox"/>
                            </label> 
                            <label>games
                              <input className="tag" name="games" type="checkbox"/>
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
              
              {data.map( ({title, id, description, link}) => (
                <Card 
                  title={title} 
                  key={id} 
                  description={description} 
                  link={link}

                />

              ))}
              
    </>
  )
}

export default App
