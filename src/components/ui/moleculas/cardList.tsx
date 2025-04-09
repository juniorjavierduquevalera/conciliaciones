import React from 'react';
import CardPresentation from '../atomos/cardApresentation';
import cardData from '../data/cardData';
function CardList() {
  return (
    <div className="grid grid-cols-2 text-white font-bold text-center">
      {cardData.map(tabla => (
        <CardPresentation key={tabla.id} {...tabla} />
      ))}
    </div>
  );
}

export default CardList;