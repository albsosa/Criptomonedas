import React, { Component } from 'react';
class Resultado extends Component {
    mostrarResultado = () => {
        const monedaCotizada = this.props.monedaCotizada;
        const {name, quotes}= this.props.cotizacion;

        if(!name) return null;
        const {price, percent_change_1h,percent_change_24h} = quotes[monedaCotizada];
        return (
            <div className="bg-success py-4">
                <div className="resumen text-light text-center">
                    <h2 className="mb-4">Resumen</h2>
                    <p><span className="font-weigth-bold">El precio de Ethereum en {monedaCotizada} es de:</span>$ {price}</p>
                    <p><span className="font-weigth-bold">Porcentaje Última hora</span>{percent_change_1h} %</p>
                    <p><span className="font-weigth-bold">Porcentaje Últimas24h</span>{percent_change_24h} %</p>
                </div>
            </div>
        );
    }
    render() { 
        return ( 
            <React.Fragment>
                {this.mostrarResultado()}
            </React.Fragment>
         );
    }
}
 
export default Resultado;