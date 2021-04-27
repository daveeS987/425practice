import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './tinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'girl1',
      url:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ibb.co%2F71zggy0%2FStefanie-Gurzanski-6.png&f=1&nofb=1',
    },
    {
      name: 'girl2',
      url:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Ffc%2Fb3%2Fd7%2Ffcb3d7dea28a01a6810a3127e987a201.jpg&f=1&nofb=1',
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ', nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name, ' left the screen');
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
