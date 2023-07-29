import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const [] = useState()

  return (
    <>
    
      <h1> The Speech and Language <br/>
                 Teletherapy Resource Library</h1>
                 

            <section class="intro">
                <div class="overview">
                    <h2>Welcome to the Library</h2>
                    <p>Below is a curated collection of online resources that I've collected over 5 years as a speech-language pathologist serving
                        schools and private clients in teletherapy. The library is in its beta version and new and improved functions are on the way!
                    </p>
                </div>
            </section>


            <section class="resources">
              <div class="filters">
                    <input type="text" class="" placeholder="Search by name" />
                    
                    <div class="">
                        <h4>Or filter by category:</h4> 
                        {/* Possibly change this to label and checkbox structure per Karla's code */}
                            <label>all
                              <input class="tag" name="all" type="checkbox"/>
                            </label> 
                            <label>games
                              <input class="tag" name="games" type="checkbox"/>
                            </label> 
                            <label>fluency
                              <input class="tag" name="fluency" type="checkbox"/>
                            </label> 
                            <label>pragmatics
                              <input class="tag" name="pragmatics" type="checkbox"/>
                            </label> 
                            <label>stories
                              <input class="tag" name="stories" type="checkbox"/>
                            </label> 
                            <label>expository text
                              <input class="tag" name="expository text" type="checkbox"/>
                            </label> 
                            <label>language
                              <input class="tag" name="language" type="checkbox"/>
                            </label> 
                            <label>articulation
                              <input class="tag" name="articulation" type="checkbox"/>
                            </label> 
                            <label>science
                              <input class="tag" name="science" type="checkbox"/>
                            </label> 
                            <label>videos
                              <input class="tag" name="videos" type="checkbox"/>
                            </label> 
                            <label>voice
                              <input class="tag" name="voice" type="checkbox"/>
                            </label> 
                            <label>aphasia
                              <input class="tag" name="aphasia" type="checkbox"/>
                            </label> 

                    </div>
                </div>
              </section>
            {/* May add outer container div for flex styling here */}
              <Card />
    </>
  )
}

export default App
