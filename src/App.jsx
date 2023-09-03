import './App.css';
import Filters from './Filters';
import { getResources } from './config/firebase-functions';

function App({data}) {


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

            <Filters data={data} />
              
    </>
  )
}

export default App
