import React from 'react';

class Form extends React.Component {
  render() {
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
              />
            </label>
          </section>
          <section>
            <label className="" htmlFor="input-att1" value="">
              Att1:
              <input
                data-testid="attr1-input"
                name="att1"
                type="number"
                id="input-att1"
                placeholder=""
              />
            </label>
            <br />
            <label className="" htmlFor="input-att2" value="">
              Att2:
              <input
                data-testid="attr2-input"
                name="att2"
                type="number"
                id="input-att2"
                placeholder=""
              />
            </label>
            <br />
            <label className="" htmlFor="input-att3" value="">
              Att3:
              <input
                data-testid="attr3-input"
                name="att3"
                type="number"
                id="input-att3"
                placeholder=""
              />
            </label>
          </section>
          <section>
            <label htmlFor="imagem">
              Imagem:
              <input type="url" name="imagem" data-testid="image-input" />
            </label>
          </section>

          <label htmlFor="raridade">
            Raridade:
            <select data-testid="rare-input" name="" id="options">
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
                id="agreement"
                value=""
                name="checkBox"
              />
              Super Trybe Trunfo
            </label>
          </div>
          <div>
            <button data-testid="save-button" type="submit" id="submit-btn">
              Salvar
            </button>
          </div>
        </form>
      </main>
    );
  }
}

export default Form;
