import React, { Component } from 'react';
import OptionSelect from './OptionSelect';
class Formulario extends Component {

    monedaRef=React.createRef();
    criptoRef=React.createRef();

    cotizarMoneda = (e) => {
        e.preventDefault();
        const respuesta = {
            moneda : this.monedaRef.current.value,
            criptomoneda : this.criptoRef.current.value
        }

        this.props.obtenerValoresCrypto(respuesta);

    }

    render() { 
        return ( 
            <form onSubmit={this.cotizarMoneda}>
                <div className="form-group">
                    <label>Moneda:</label>
                    <select ref={this.monedaRef} className="form-control">
                        <option value="" disabled defaultValue >Elige tu moneda</option>
                        <option value="USD">Dolar EUA</option>
                        <option value="MXN">Peso Mexicano</option>
                        <option value="GBP">Libras</option>
                        <option value="EUR">Euros</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Criptomoneda:</label>
                    <select ref={this.criptoRef} className="form-control">
                        {Object.keys(this.props.monedas).map(key =>(
                            <OptionSelect
                            key ={key}
                                moneda = {this.props.monedas[key]}
                            />
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Cotizar" />
                </div>    
            </form>
         );
    }
}
 
export default Formulario;