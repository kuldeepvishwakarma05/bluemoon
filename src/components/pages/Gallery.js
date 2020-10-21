import React from 'react'
import Footer from '../Footer'
import './Gallery.css'
import card6 from './images/card6.jpg'
import card7 from './images/card7.jpg'
import card8 from './images/card8.jpg'
import card4 from './images/card4.jpg'
import card5 from './images/card5.jpg'
function Gallery() {
    return (
        <>
         
<div class="header">
  <h1>Great collection</h1>
  <p>This is how we build your dreams</p>
</div>

<div class="row"> 

  <div class="column">
    <img src={card6}  />
    <img src={card7}  />
    <img src={card8}  />
    <img src={card4}  />
    
  
  </div>
  <div className="column">
  <img src={card4}  />
    <img src={card8}  />
    <img src={card7}  />
    <img src={card6}  />
 
  </div>
  <div className="column">
  <img src={card6}  />
    <img src={card7}  />
    <img src={card8}  />
    <img src={card4}  />
   
  </div>
  <div className="column">
  <img src={card4}  />
    <img src={card8}  />
    <img src={card7}  />
    <img src={card6}  />
    
  </div>
</div>
<Footer/>

        </>
    )
}

export default Gallery;
