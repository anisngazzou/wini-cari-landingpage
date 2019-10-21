import React from 'react';
import { HashRouter, NavLink } from "react-router-dom";
import './Style/Menu.css';
class Menu extends React.Component {
  state = {
    mobileMenuVisible: false,
  };
render() {
    const { mobileMenuVisible } = this.state;
    return (
      <React.Fragment>
      <HashRouter>
        <section className="header">
          <section className="menuLogo">
              <img id="tlk" src="/img/buss.svg" alt="Bus Soft logo" height="80" />
          </section>
          <section className="menu">
            <a className="menuItem desktop">
              <NavLink to="/">Acceuil</NavLink>
            </a>
            <a className="menuItem desktop">
            <NavLink to="/Service">Services</NavLink>
            </a>
            <a className="menuItem desktop">
            <NavLink to="/Equipe"> Equipe &amp; Vision</NavLink>
            </a>
            <a className="menuItem desktop">
            <NavLink to="/Contact"> Contacts</NavLink> 
            </a>
            <a className="menuItem desktop" >
              Espace Client
            </a>
            
            
            <button
              className="menuItem mobile"
              id="trigger-overlay"
              type="button"
              onClick={() =>
                this.setState({ mobileMenuVisible: !mobileMenuVisible })
              }
            >
              <img
                src="/img/hamburgerIcon.svg"
                height="19"
                alt="hamburger icon"
              />
            </button>
          </section>
         
        </section>
        {mobileMenuVisible && (
          <div className="overlay overlay-hugeinc open">
            
            <nav>
              <ul>
                <li >
                 <NavLink to="/">Acceuil</NavLink>
                </li>
                <li>
                    <NavLink to="/Service">Services</NavLink>
                </li>
                <li>
                   <NavLink to="/Equipe"> Equipe &amp; Vision</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact"> Contacts</NavLink> 
                </li>
                <li>
                    Espace Client
                </li>
              </ul>
            </nav>
          </div>
        )}
        </HashRouter>
      </React.Fragment>
    );
  }
}
export default Menu;
