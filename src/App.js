import React from "react";
import Form from "./components/Form";
import Card from "./components/Card";
import { func } from "prop-types";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: "",
      cardAttr2: "",
      cardAttr3: "",
      cardImage: "",
      cardRare: "",
      cardTrunfo: "",
      isSaveButtonDisabled: false,
    };
  }

  onInputChange = ({ target }) => {
    console.log(target);
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value }, () => {
        const {
          cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      } = this.state;

        }
      }
    )
  };

  render() {
    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
