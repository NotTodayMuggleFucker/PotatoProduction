import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/css/App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Homepage/Home';
import Services from './components/pages/Pricing/Pricing';
import Proyects from './components/pages/Proyects/Proyects';
import Contact from './components/pages/ContactUs/Contact'
import SignUp from './components/pages/SignUp/SignUp';
import FooterBg from './components/FooterBg';
import Footer from './components/pages/Footer/Footer';


function App() {
  return (
    
    <Router>
      <Navbar />
      <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/pricing' component={Services} />
       <Route path='/proyects' component={Proyects} />
       <Route path='/contact' component={Contact} />
       <Route path='/sign-up' component={SignUp} />
      </Switch>
      <FooterBg />
      <Footer />
    </Router>
   
  );
}

export default App;
