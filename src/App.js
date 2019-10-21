import React from 'react';
import './App.css';
import Menu from './components/Menu';
import {
  Route,
  HashRouter
}from "react-router-dom";
import Home from './components/Home';
import Swiper from './components/Service';
import Quotes from'./components/Quotes';
import ContactForm from './components/ContactForm';

class App extends React.Component {
 
  render() {
  return (
    <div >
       <HashRouter>
         <div>
            <Menu />
          <div  className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/Service" component={Swiper}/> 
              <Route path="/Equipe" component={Quotes}/>
              <Route path="/Contact" component={ContactForm}/>  
           </div>
         </div>
       </HashRouter>
    </div>
  );
}}

export default App;

  