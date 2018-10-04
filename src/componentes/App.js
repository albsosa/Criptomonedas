import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resultado from './Resultado';
import axios from 'axios';
class App extends Component {
  state = {
    monedas:[],
    cotizacion: {},
    monedaCotizada: '',
    cargando: false
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
  //Cotizar una crypto en base a una moneda 
  obtenerValoresCrypto = async (monedas) => {
    const {moneda, criptomoneda} = monedas;
    const url = `https://api.coinmarketcap.com/v2/ticker/${criptomoneda}/?convert=${moneda}`;
    await axios.get(url)
    .then(respuesta => {
      this.setState({
        cargando:true
      })
      setTimeout(() => {
        this.setState({
          cotizacion : respuesta.data.data,
          monedaCotizada : moneda,
          cargando:false
        })
      }, 3000 );
    })
    .catch(error =>{
      console.error(error);
    }) 
  }

  render() {
    const cargando= this.state.cargando;
    let resultado;
    if (cargando){
      resultado = <div className="spinner"></div>
    }
    else {
      resultado = <Resultado
      cotizacion ={this.state.cotizacion}
      monedaCotizada ={this.state.monedaCotizada}
    />
    }
    return (
      <div className="container">
        <Header 
          titulo= 'Cotiza Criptomonedas al Instante' 
        />
        <div className="row justify-content-center">
          <div className="col-md-6 bg-ligth pb-4 contenido-principal">
        <Formulario 
          monedas ={this.state.monedas}
          obtenerValoresCrypto={this.obtenerValoresCrypto}
        />
        
        {resultado}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
