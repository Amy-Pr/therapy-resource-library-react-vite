import './App.css';
import Filters from './Filters';
import { getResources } from './config/firebase-functions';
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([]);

  //Fetch data from Firestore database and set to state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataFromFirestore = await getResources();
        setData(dataFromFirestore || []);
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    fetchData();
  }, []);


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

            <Filters data={data}/>
              
    </>
  )
}

export default App
