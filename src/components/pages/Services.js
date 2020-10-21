import React from 'react'

import Footer from '../Footer'
import './Services.css'
import img3 from './images/sarvesh.jpg'
import img2 from './images/khushboo.jpg'
import img1 from './images/ved.jpg'

function Services() {
    return (
        <>
           <h1>Our team</h1>

<div className="row">
 
<div className="card">
    <img src={img1} alt="owner"/>
    <h3>Vedprakash Sharma</h3>
    
    <p className="title">CEO & Founder</p>
    <p className="title">
      <i class="fab fa-whatsapp-square" aria-hidden="true" /> 
         +91 7073473292
    </p>
    
    

</div>
        
   
<div className="card">
    <img src={img2} alt="owner"/>
    <h3>Khushboo Sharma</h3>
    <p className="title">CEO & Founder</p>
    <p className="title">
      <i class="fab fa-whatsapp-square" aria-hidden="true" /> 
         +91 8085566460
    </p>
</div>


<div className="card">
    <img src={img3} alt="owner"/>
    <h3>Sarvesh Sharma</h3>
    <p className="title">CEO & Founder</p>
    <p className="title">
      <i class="fab fa-whatsapp-square" aria-hidden="true" /> 
         +91 9140783511
    </p>
    </div>

</div>
<Footer/>
        </>
    )
}

export default Services;
