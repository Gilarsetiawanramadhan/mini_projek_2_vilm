import './App.css';
import NavbarMovie from './Component/Navbar';
import IntroMovie from './Component/intro';
import Card from 'react-bootstrap/Card';
import './style/LandingPage.css'

function App() {

  
  return (
    <>
      <div className='myBG'>
        <NavbarMovie/>
        <h1>hello world</h1>
        <IntroMovie/>
        <div className='Movie-Container'>
          <div className='Movie-Wraper'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Rate>
                      8,9
                </Card.Rate>
                <Card.Date>
                  10/29/2022
                </Card.Date>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
