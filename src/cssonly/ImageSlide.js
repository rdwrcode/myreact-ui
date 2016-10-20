import React from 'react';
import './ImageSlide.css';

const ImageSlide = () => (
  <div className="slides">
    <div id="slider">
      <img id="slide-1" src="https://unsplash.it/300/200?image=40" alt="img description"/>
      <img id="slide-2" src="https://unsplash.it/300/200?image=41" alt="img description"/>
      <img id="slide-3" src="https://unsplash.it/300/200?image=42" alt="img description"/>
      <img id="slide-4" src="https://unsplash.it/300/200?image=45" alt="img description"/>

      <ul>
        <li><a href="#slide-1">1</a></li>
        <li><a href="#slide-2">2</a></li>
        <li><a href="#slide-3">3</a></li>
        <li><a href="#slide-4">4</a></li>
      </ul>
    </div>
  </div>
);

export default ImageSlide;
