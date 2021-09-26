import React, {Component} from 'react';
import SmallCard from './SmallCard';

// declaro componente de clase

class ContentRowCards extends Component{
    constructor(){
        super()
        this.state ={
            tarjetas : []
        }
    }
    // Declaro estado inicial
    componentDidMount(){
        Promise.all([
            fetch('http://localhost:3002/api/products').then(res => res.json()),
            fetch('http://localhost:3002/api/users').then(res => res.json())
        ]).then((promisesData) => {
            let tarjetaProducts = {
                color:   "primary",
                titulo: "Productos en Base de Datos",
                valor: promisesData[0].meta.count,
                icono: "fas fa-mountain",};

            let tarjetaUsers = {
                color:   "success",
                titulo: "usuarios registrados",
                valor: promisesData[1].meta.count,
                icono: "fas fa-hiking",
            };
            let categoriesData = {
                color:   "warning",
                titulo: "Categorias totales",
                valor: promisesData[0].meta.categoriesCount,
                icono: "fas fa-bookmark",
            };

            this.setState({
                tarjetas: [tarjetaProducts, tarjetaUsers, categoriesData]
            });
        })

    }
    render(){
        return (
            <React.Fragment>
            {/*<!-- Content Row -->*/}
                <div className="row">
            {
                this.state.tarjetas.map((tarjeta,index)=>{
                    return <SmallCard  {...tarjeta}  key= {index}/>
                })
            }      
        </div>
            </React.Fragment>
    )}
}

export default ContentRowCards;