import React from 'react';
import Proptype from 'prop-types';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <main>
        <form>
          <label className="" htmlFor="cardName" value="">
            Nome:
            <input
              data-testid="name-input"
              name="cardName"
              type="text"
              id="input-name"
              placeholder=""
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <section className="descricaoTrunfo">
            <label htmlFor="textarea" className="textarea">
              Descrição:
              <br />
              <textarea
                data-testid="description-input"
                name="cardDescription"
                id="textarea"
                cols="20"
                rows="10"
                maxLength="500"
                value={ cardDescription }
                onChange={ onInputChange }
              />
            </label>
          </section>
          <section>
            <label htmlFor="input-att1">
              Att1:
              <input
                data-testid="attr1-input"
                name="cardAttr1"
                type="number"
                id="input-att1"
                placeholder=""
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </label>
            <br />
            <label htmlFor="input-att2">
              Att2:
              <input
                data-testid="attr2-input"
                name="cardAttr2"
                type="number"
                id="input-att2"
                placeholder=""
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>
            <br />
            <label htmlFor="input-att3">
              Att3:
              <input
                data-testid="attr3-input"
                name="cardAttr3"
                type="number"
                id="input-att3"
                placeholder=""
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>
          </section>
          <section>
            <label htmlFor="imagem">
              Imagem:
              <input
                type="url"
                name="cardImage"
                data-testid="image-input"
                value={ cardImage }
                onChange={ onInputChange }
              />
            </label>
          </section>

          <label htmlFor="raridade">
            Raridade:
            <select
              data-testid="rare-input"
              name="cardRare"
              id="options"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          <div>
            <label htmlFor="checkBox">
              {hasTrunfo ? (
                <p>Você já tem um Super Trunfo em seu baralho</p>
              ) : (
                <input
                  data-testid="trunfo-input"
                  type="checkbox"
                  id="super"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              )}
              Super Trybe Trunfo
            </label>
          </div>
          <div>
            <button
              data-testid="save-button"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
              type="submit"
              id="submit-btn"
            >
              Salvar
            </button>
          </div>
        </form>
      </main>
    );
  }
}
Form.propTypes = {
  cardName: Proptype.string,
  cardDescription: Proptype.string,
  cardAttr1: Proptype.string,
  cardAttr2: Proptype.string,
  cardAttr3: Proptype.string,
  cardImage: Proptype.string,
  cardRare: Proptype.string,
  cardTrunfo: Proptype.bool,
  hasTrunfo: Proptype.bool,
  isSaveButtonDisabled: Proptype.bool,
  onInputChange: Proptype.func,
  onSaveButtonClick: Proptype.func,
}.isRequired;

export default Form;
