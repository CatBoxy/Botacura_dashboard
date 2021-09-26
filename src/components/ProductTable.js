//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

//Importar nuestro componente
import ProductsList from './ProductsList';

class ProductTable extends Component{
    constructor(){
        super()
        this.state ={
            products : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    componentDidMount(){
    

        fetch('http://localhost:3002/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            //console.log(movies)
            this.setState({products: products.data})
        })
        .catch(error => console.log(error))

    }


    render(){
        return (
            <React.Fragment>
            {/*<!-- MOVIES LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 productList">Todos los productos en la base de datos</h1>
            
            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Categoria</th>
                                    <th>Marca</th>
                                    <th>Oferta</th>
                                    <th>Descuento</th>
                                    <th>Temporada</th>
                                    <th>stockMin</th>
                                    <th>stockMax</th>
                                    <th>Acceso</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    //console.log(this.state.movies)
                                    this.state.products.map((product,index)=>{
                                        return <ProductsList  {...product} key={index}  />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>


    
    </React.Fragment>
    )
    }
}
export default ProductTable;
