import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import demo from './assets/images/demo.png'; OPCION A - Cargar fotos
import images from './assets/images';
import Nav from 'react-bootstrap/Nav'







//Bootsrap
import { Button, Container, Row, Col, Images,  } from 'react-bootstrap';

//Import Components
import FirstComponent from './components/FirstComponent';

function App() {
  return (
    <div className="App">
      <>
  <Nav className="justify-content-end" activeKey="/home">
  <Nav.Item>
      <Nav.Link href="#web">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#web">Web Development</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Graphic Design</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Hosting</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Contact
      </Nav.Link>
    </Nav.Item>
  </Nav>
</> 
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-link">
        Web Development
        </p>
        <p>
        <code>Graphic Design</code> 
        </p>
        <p>
       Hosting.
        </p>
         
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
     
      <body>

        <section className="Intro">
            <h1 className='title-bold'>Turn your Business / Project into a success. 
                <code>We can make it</code> a reality</h1> 
                 
                </section>
        
         <section className="page1">
         <Row>
            <Col className="features"><h2>Web Development</h2>  
                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                   Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                   natoque penatibus et magnis dis parturient. natoque penatibus et magnis dis parturient.</p> 

                   <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                   Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                   natoque penatibus et magnis dis parturient.</p> 
                
             <Row>
                  <Col><h5>FrontEnd</h5>
                         <h6>HTML, CSS, Javascript</h6>
                            
                     </Col>
                        <Col><h5>BackEnd</h5>
                              <h6>React, Node, SQL, Mongo</h6>
                                
                           </Col>
             </Row>
             
                </Col>
                   <Col className="animationRight"> <img src={images.img3} alt="" /> 
                     </Col>
                 </Row>
                 
          <Row>
             <Col className="features2" ><h6>FrontEnd</h6>  
                 <p>HTML & CSS Responsive Web Design, Javascript</p> 
                      </Col>
                         <Col className="features2" ><h6>BackEnd</h6> 
                            <p>React JS Development, Node.js </p> 
                                </Col>
                                     <Col className="features2" ><h6>CMS Theming Services</h6>   
                                        <p>Total front-end developers deliver prompt and professional
                                           theming services for popular CMS platforms such as WordPress.
                                             </p> 
                                            </Col>
           </Row>
              
           </section>

          <section className="page2">
            <h2><span>Graphic Design</span></h2>  
                 <p><span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                   Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                   natoque penatibus et magnis dis parturient.
                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                   Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                   natoque penatibus et magnis dis parturient.sss</span></p> 
                      <p><span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                         Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                           natoque penatibus et magnis dis parturient.
                             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                               Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                                natoque penatibus et magnis dis parturient.sss</span></p> 
                                 <img src={images.img3} alt="" />
          </section>
                      
           <section className="page3"> 
                <div className="leftContent">
                  
                             <h2>Hosting</h2>  
                                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                                        natoque penatibus et magnis dis parturient. natoque penatibus et magnis dis parturient.</p> 

                                       <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                           Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                                             natoque penatibus et magnis dis parturient.</p> 
                                             </div>
                                             
 
                                             <div className="rightContent">
                
                                                  <img src={images.img3} alt="" /> 
                  
                                                     </div>
            </section> 
          
            <section className="page1">
         <Row>
         <Col className="animationLeft"> <img className="imageLeft" src={images.img3} alt="" />
             
             
                </Col>
                   
                   <Col className="features3"><h2>Hosting</h2>  
                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                   Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                   natoque penatibus et magnis dis parturient. natoque penatibus et magnis dis parturient.</p> 

                   <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                   Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                   natoque penatibus et magnis dis parturient.</p>  
                     </Col>
                 </Row>
                 
          
              
           </section>

      </body>
     
   




  
   </div>



  );
}


export default App;
