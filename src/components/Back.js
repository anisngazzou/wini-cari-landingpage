import React from 'react';
import BigPhone from './BigPhone';
import Hero from './Hero';
import CardInput from './CardInput';
const Back = () => {
  return (
  <div>
      <header  className="v-header container">
            <div className="fullscreen-video-wrap">
                <video src="/img/aad.mp4" autoPlay loop></video>
            </div>
            <span className="header-overlay">
                <span className="header-content text-md-center" >
                    <CardInput />
                    <Hero />
                    <BigPhone />
                </span>
            </span>
        </header>
 </div>
    );
};

export default Back


