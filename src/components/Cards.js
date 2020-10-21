import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.jpg'
import card3 from '../images/card3.jpg'
import card4 from '../images/card4.jpg'
import card5 from '../images/card5.jpg'
function Cards() {
  return (
    <div className='cards'>
      <h1>Wow our events are amazing !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={card1}
              text='Beauty of our photoshoot events'
              label='Kanpur'
              path='/events'
            />
            <CardItem
              src={card2}
              text='Pre-wedding shoot available here  '
              label='Indore'
              path='/events'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={card3}
              text='Amazing dressing material got out'
              label='Delhi'
              path='/events'
            />
            <CardItem
              src={card4}
              text='bluemoon available in all cities'
              label='Kanpur'
              path='/events'
            />
            <CardItem
              src={card5}
              text='Upgrade your wedding plans'
              label='Banda'
              path='/events'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;