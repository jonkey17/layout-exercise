import React from 'react';

import Card from '../Card';
import './CardList.scss';

const CardList = ({items=[1,2,3,4]}) => {
  return(
    <div className="CardList">
    {
      items.map((item, index) => (<Card key={index}/>))
    }
    </div>
  );
}

export default CardList;