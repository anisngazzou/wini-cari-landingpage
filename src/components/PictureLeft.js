import React from 'react';

const PictureLeft = props => {
  return (
    <section className="sectionComponentRight">
      <span className="columnText">
        <span className="rightContentText">
          <h1 className="sectionTitle1">{props.title1}<h1  className="flux1">{props.title2}</h1></h1>
          <p className="sectionSub1">{props.subtitle}</p>
        </span>
      </span>
      <span className="sectionPicture">
        <img
          className="supportPicture"
          src={props.url}
          alt="iphone"
          border="0"
          loading="lazy"
        />
      </span>
    </section>
  );
};

export default PictureLeft;
