import React from 'react';

const BigPhone = () => {
  return (
    <span className="bigPhone">
      <video
        className="heroVid"
        playsInline
        autoPlay
        muted
        loop
       >
        <source src="/img/bigPhoneVideo.mp4" type="video/mp4" width="100%" />
      </video>{' '}
    </span>
  );
};

export default BigPhone;
