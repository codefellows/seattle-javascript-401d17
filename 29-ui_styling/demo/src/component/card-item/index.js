import './_card-item.scss';
import React from 'react';
import {connect} from 'react-redux';

import CardForm from '../card-form';
import {cardUpdate, cardDelete} from '../../action/card-actions.js';

class CardItem extends React.Component {
  render() {
    let {card, cardDelete, cardUpdate} = this.props;

    return (
      <li className='card-item'>
        <p>{card.content}</p>
        <button className='remove' onClick={() => cardDelete(card)}>x</button>
        <CardForm
          card={card}
          buttonText='update card'
          onComplete={cardUpdate} />
      </li>
    )
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = (dispatch) => ({
  cardUpdate: (card) => dispatch(cardUpdate(card)),
  cardDelete: (card) => dispatch(cardDelete(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
