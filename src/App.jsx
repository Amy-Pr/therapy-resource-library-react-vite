import './App.css';
import Filters from './Filters';
import { getResources } from './config/firebase-functions';
import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //Fetch data from Firestore database and set to state
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const dataFromFirestore = await getResources();
        setData(dataFromFirestore || []);
        setLoading(false);
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
                <Accordion 
                  sx = {{bgcolor: "#C8CDE0"}}
                  defaultExpanded
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx = {{textAlign: 'center'}}
                
                  >
                  <Typography sx={{width: '100%', fontFamily: '"Raleway", sans-serif', fontWeight: '500'}} variant='h5'>About the Library</Typography>
                 
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{px: 5, fontFamily: '"Raleway", sans-serif', fontWeight: '500'}} paragraph>
                    Below is a curated, searchable collection of online resources that I've collected over 6 years as a speech-language 
                    pathologist serving schools and private clients through teletherapy. The library is in its beta version. Check back for new 
                    and improved features!
                    </Typography>

                    <Typography sx={{px: 5, fontFamily: '"Raleway", sans-serif', fontWeight: '500'}} paragraph>
                    In addition to speech therapy, I am also a javascript developer. This site was created using React and Vite.js. To
                    learn more about how I built it, check out the repository on <a href="https://github.com/Amy-Pr" target="_blank">my GitHub</a>. 
                    </Typography>

                    <Typography sx={{px: 5, fontFamily: '"Raleway", sans-serif', fontWeight: '500'}} paragraph>
                    Want to collaborate? Connect with me on <a href="https://www.linkedin.com/in/amy-preci-developer" target="_blank">LinkedIn</a> and check out <a href="https://www.amytechtherapy.com/" target="_blank">my dev Portfolio</a>. 
                    </Typography>

                    <Typography sx={{px: 5, fontFamily: '"Raleway", sans-serif', fontWeight: '500'}} paragraph>
                    If you like this app and want to support future projects like this, <a href="https://www.buymeacoffee.com/amytechtherapy" target="_blank">fill up my coffee cup</a>, and I will continue to fill up the database. Enjoy!
                    </Typography>
                    <div className="coffee-div">
                      <a href="https://www.buymeacoffee.com/amytechtherapy" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" className="coffee-img"/></a>
                    </div>
                  </AccordionDetails>
                  
                </Accordion>


                </div>
            </section>

            <Filters data={data} loading={loading}/>

            <div id="footer">
              <p>Built by Amy Preci &#169; 2024</p>
              <div>
                <a href='https://github.com/Amy-Pr' target="_blank"><i className="fa-brands fa-github fa-lg"></i> </a>
                <a href='https://www.linkedin.com/in/amy-preci-developer' target="_blank"><i className="fa-brands fa-linkedin-in fa-lg"></i></a>
                <a href='https://www.buymeacoffee.com/amytechtherapy' target="_blank"><i className="fa-solid fa-mug-hot fa-lg"></i></a>
              </div>
            </div>

    </> 
  )
}

export default App
