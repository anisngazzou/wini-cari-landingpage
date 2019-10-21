import React from 'react';
import "./Style/Contact.css"
import MyMapComponent from './MapGoogle'
const ContactForm = () => {
  return (
    <section id="contact">
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous"/>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossorigin="anonymous"/>
    
    <div class="container">
        <h3 class="text-center text-uppercase">contact us</h3>
        <p class="text-center w-75 m-auto">You can get in touch anytime through


</p>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-3 my-5">
            <div class="card border-0">
               <div class="card-body text-center">
                 <i class="fa fa-phone fa-5x mb-3" aria-hidden="false"></i>
                 
                 <p id="tita"><ul><h5>Commerciale</h5><li>+216 97 455 016</li><h5>Technique</h5><li>+216 99 202 630</li><h5>Service Web</h5><li>+216 52 632 076</li></ul></p>
               </div>
             </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3 my-5">
            <div class="card border-0">
               <div class="card-body text-center">
                 <i  class="fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                 
                <address>Adresse Rue Hadi Nouira.
Akouda-Sousse, TN 4022 </address>
               </div>
             </div>
          </div>
          
          <div class="col-sm-12 col-md-6 col-lg-3 my-5">
            <div class="card border-0">
               <div class="card-body text-center">
                 <i class="fa fa-globe fa-5x mb-3" aria-hidden="true"></i>
                 
                 <p><ul><h5>Commerciale</h5><li>bussoftware@winicari.tn</li><h5>Technique</h5><li>postmaster@winicari.tn</li><h5>Service Web</h5><li>webmaster@winicari.tn</li></ul>
               </p>
               </div>
             </div>
          </div>
        </div>
    </div>
    <MyMapComponent  />
 </section>
    )
  }
export default ContactForm;