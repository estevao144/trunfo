import React from 'react';
import Proptype from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <main>
        <div>
          <p data-testid="name-card">{ cardName }</p>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <p data-testid="description-card">{ cardDescription }</p>
          <p data-testid="attr1-card">{ cardAttr1 }</p>
          <p data-testid="attr2-card">{ cardAttr2 }</p>
          <p data-testid="attr3-card">{ cardAttr3 }</p>
          <p data-testid="rare-card">{ cardRare }</p>
          {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
        </div>
      </main>
    );
  }
}
Card.propTypes = {
  cardName: Proptype.string,
  cardDescription: Proptype.string,
  cardAttr1: Proptype.string,
  cardAttr2: Proptype.string,
  cardAttr3: Proptype.string,
  cardImage: Proptype.string,
  cardRare: Proptype.string,
  cardTrunfo: Proptype.string,
}.isRequired;
export default Card;
