//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

//Importar nuestro componente
import Category from './Category';

class CategoriesInDB extends Component{
    constructor(){
        super()
        this.state ={
            categoriesList : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje 
    componentDidMount(){
        
            fetch('http://localhost:3002/api/categories').then(res => res.json())
            .then(promise =>{
                this.setState({
                    categoriesList: promise.data.categories})
            })
            .catch(error => console.log(error))
    }


    fondo(){
        let fondoCaja = document.querySelector('.fondoCaja');
        fondoCaja.classList.toggle('bg-secondary');
    }


    render(){
        return (
            <React.Fragment>
                {/*<!-- Genres in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4 " >
                        <div className="card-header py-3">
                            <h6  onMouseOver = { () => this.fondo()}  className="m-0 font-weight-bold text-gray-800 titulo">Categorias en base de datos</h6>
                        </div>
                        <div className="card-body fondoCaja">
                            <div  className="row">
                                {
                                    this.state.categoriesList.map((category,index)=>{
                                        return  <Category  {...category} key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
    
    </React.Fragment>
    )
    }
}
export default CategoriesInDB;
