import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import axios from 'axios';
class App extends Component {
  state = {
    monedas:[]
  }

  async componentDidMount(){
    this.obtenerMonedas();
  }

  obtenerMonedas = async () => {
    const url = `https://api.coinmarketcap.com/v2/ticker/`;
    await axios.get(url)
    .then(respuesta => {
      this.setState({
        monedas : respuesta.data.data
      })
    })
    .catch(error =>{
      console.error(error);
    }) 
  }


  render() {
    return (
      <div className="container">
        <Header 
          titulo= 'Cotiza Criptomonedas al Instante' 
        />
        <div className="row justify-content-center">
          <div className="col-md-6 bg-ligth pb-4 contenido-principal">
        <Formulario 
          monedas ={this.state.monedas}
        />
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;
