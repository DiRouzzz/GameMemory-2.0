import React from 'react';
import { Card } from './Card.jsx';
import { TIMEOUT } from '../settings.js';

export function Grid({images = [], finishedItems, checkItems, gameType}) {
      const [visibleItems, setVisibleItems] = React.useState([]);

      const handleCardClick = (id) => {
        if (finishedItems.includes(id) || visibleItems.includes(id)) {
          return;
        }

        switch (visibleItems.length) {
          case 0:
            setVisibleItems([id]);
            break;
          case 1:
            setVisibleItems((items) => [...items, id]);
            checkItems(visibleItems[0], id);
            setTimeout(() => {
              setVisibleItems([]);
            }, TIMEOUT);
            break;
          default:
            setVisibleItems([]);
        }
      };

      return (
        <ul className={`cards cards-theme-${gameType}`}>
          {images.map((item) => (
            <Card
              key={item.id}
              item={item}
              isVisible={visibleItems.includes(item.id)}
              isFinished={finishedItems.includes(item.id)}
              onCardClick={handleCardClick}
            />
          ))}
        </ul>
      );
    }