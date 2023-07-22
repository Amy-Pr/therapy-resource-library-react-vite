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
                            <button id="all" class="btnFilter">all</button>
                            <button id="games" class="btnFilter">games</button>
                            <button id="fluency" class="btnFilter">fluency</button>
                            <button id="pragmatics" class="btnFilter">pragmatics</button>
                            <button id="stories" class="btnFilter">stories</button>
                            <button id="expository text" class="btnFilter">expository text</button>
                            <button id="language" class="btnFilter">language</button>
                            <button id="articulation" class="btnFilter">articulation</button>
                            <button id="science" class="btnFilter">science</button>
                            <button id="videos" class="btnFilter">videos</button>
                            <button id="voice" class="btnFilter">voice</button>
                            <button id="aphasia" class="btnFilter">aphasia</button>
                    </div>
                </div>
              </section>
            {/* May add outer container div for flex styling here */}
              <Card />
    </>
  )
}

export default App
