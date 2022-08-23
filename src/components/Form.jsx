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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <main>
        <form>
          <label className="" htmlFor="name" value="">
            Nome:
            <input
              data-testid="name-input"
              name="name"
              type="text"
              id="input-name"
              placeholder="Nome"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <section className="descricaoTrunfo">
            <label htmlFor="textarea" className="textarea">
              Deixe seu comentário:
              <br />
              <textarea
                data-testid="description-input"
                name="textarea"
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
                name="att1"
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
                name="att2"
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
                name="att3"
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
                name="imagem"
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
              name=""
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
              <input
                data-testid="trunfo-input"
                type="checkbox"
                id="super"
                name="checkBox"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
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
  isSaveButtonDisabled: Proptype.bool,
  onInputChange: Proptype.func,
  onSaveButtonClick: Proptype.func,
}.isRequired;

export default Form;
