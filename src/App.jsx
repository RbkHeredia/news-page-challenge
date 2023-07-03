
import './App.css'
import NavBar from './components/navbar'
import { Col, Container, Row, Button,  } from 'react-bootstrap';
import portada from '/assets/images/image-web-3-desktop.jpg';
import './styles/styles.css';
import New from './components/new';
import MiniNews from './components/miniNews';



function App() {
  const news = [
    {id:1, title: 'Hydrogen VS Electric Cars', text:'Will hydrogen-fueled cars ever catch up to EVs?'},
    {id:2, title: 'The Downsides of AI Artistry', text:'What are the possible adverse effects of on-demand AI image generation?'},
    {id:3, title: 'Is VC Funding Drying Up?', text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'}
  ];

  const miniNews = [
    {id:1, title: 'Reviving Retro PCs', text:'What happens when old PCs are given modern upgrades?', img:'/news-page-challenge/assets/images/image-retro-pcs.jpg'},
    {id:2, title: 'Top 10 Laptops of 2022', text:'Our best picks for various needs and budgets.', img:'/news-page-challenge/assets/images/image-top-laptops.jpg'},
    {id:3, title: 'The Growth of Gaming', text: 'How the pandemic has sparked fresh opportunities.', img:'/news-page-challenge/assets/images/image-gaming-growth.jpg'}
  ]
  return (
    <Container fluid className='p-0' >
      <NavBar />
      <Row style={{padding:'3% 10%', maxWidth:'100%', boxSizing:'border-box'}} className='gap-4' >
        <Col sm={12} lg={7} className='gap-5'>
          <Row>
            <img src={portada} alt='portada'/>
          </Row>
          <Row style={{marginTop:'2rem'}} >
            <Col sm={12} md={6}>
              <h2 style={{fontWeight:700, color:'black', fontSize:'2.5rem'}}>The Bright Future of Web 3.0?</h2>
            </Col>
            <Col>
              <p style={{fontSize:'0.7rem'}}>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
              <Button style={{background:'black', border:'none', borderRadius: 0, letterSpacing:'3px', padding:'0.5rem 2rem'}}>READ MORE</Button>
            </Col>
          </Row>
        </Col>
        
        <Col lg={4}  style={{background:'#05002d', padding:'1.3rem 1.5rem', color:'white', margin:' 0 1rem', maxWidth:'95%', boxSizing:'border-box' }}>
          <h3 style={{color:'orange', fontWeight:700, fontSize:'2rem'}}>New</h3>
          {news.map((not)=>
            <New key={not.id} id={not.id} title={not.title} text={not.text}/>
          )}
        </Col>
      </Row>
      <Row style={{padding:'0 10%', }} >
        {miniNews.map((mn)=>
          <MiniNews 
            key={mn.id}
            num={mn.id}
            photo={mn.img}
            title={mn.title}
            text={mn.text}
          />
        )}
      </Row>
    </Container>
  )
}

export default App
