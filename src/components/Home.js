import React from 'react';
import './Style/Home.css';
import Integrations from './Integrations';
import SavingAccount from './SavingAccount';
import Back from './Back';
import NativedApps from './NativedApps';
import BigBus from './BigBus';
import NewsletterForm from './NewsletterForm';
class Home extends React.Component {
  render() {
        return (
    
    
                 <div >
                    <Back/>
                    <Integrations />
                    <SavingAccount />
                    <NativedApps/>
                    <NewsletterForm />
                    <BigBus /> 
                </div>
   
  );
}}

export default Home;

  