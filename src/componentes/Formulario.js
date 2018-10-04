import React, { Component } from 'react';
import OptionSelect from './OptionSelect';
class Formulario extends Component {
    render() { 
        return ( 
            <form>
                <div className="form-group">
                    <label>Moneda:</label>
                    <select className="form-control">
                        <option value="" disabled defaultValue >Elige tu moneda</option>
                        <option value="USD">Dolar EUA</option>
                        <option value="MXN">Peso Mexicano</option>
                        <option value="GBP">Libras</option>
                        <option value="EUR">Euros</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Criptomoneda:</label>
                    <select className="form-control">
                        <OptionSelect

                        />
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