import React, {useContext, useState} from 'react';
import {CategoriasContext} from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';


 
const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        nombre:'',
        categoria:''
    })

    const {categorias} = useContext(CategoriasContext)
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext)

    //Funcion para leer los contenidos
    const obtenerDatosRecetas = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    
        
    return ( 
        <form 
            className="col-12"
            onClick={e =>{
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true)
            }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoria o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        type="text"
                        className="form-control"
                        name="nombre"
                        placeholder="Buscar por Ingrediente"
                        onChange={obtenerDatosRecetas}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control" 
                        name="categoria"
                        onChange={obtenerDatosRecetas}
                         
                    >
                        <option value="">-- Selecciona Categoría --</option>
                        {categorias.map(categoria =>(
                            <option key={categoria.strCategory}
                                    value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                     <input     
                        type="text"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;