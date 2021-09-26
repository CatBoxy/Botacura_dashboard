import React, {Component} from 'react';
import Product from './Product';
// declaro componente de clase

class LastProductInDB extends Component {
    constructor() {
        super();
        this.state = { 
            producto : {},
        }
    }
    // Declaro estado inicial
    componentDidMount(){
            fetch('http://localhost:3002/api/products/lastProduct')
            .then(res => res.json())
            .then((promiseData) => {
                let lastProduct = promiseData.data;
                this.setState({producto: lastProduct})
            }) 
    }
    render() { 
        return (
            <React.Fragment>
                {/* <Product imagen = {this.state.producto.lastProduct.data.urlImg}/> */}
                    <Product  {...this.state.producto}  />
            </React.Fragment>
          );
    }
}
 
export default LastProductInDB;