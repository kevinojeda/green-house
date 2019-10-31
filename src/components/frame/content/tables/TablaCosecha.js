import React, { Component } from "react";
import { BrowserRouter as Router , Link } from "react-router-dom";
import axios from 'axios';

class TablaCosecha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cosechas: []
    };
    this.getCosechas = this.getCosechas.bind(this);
    this.deleteCosecha = this.deleteCosecha.bind(this);
  }
  async componentDidMount() {
    this.getCosechas();
  }
  getCosechas = async () => {
    const res =  await axios.get('http://localhost:5000/cosecha/')
    .catch(function (error) {      console.log(error);  })
    this.setState({ cosechas: res.data})

    console.log(this.state);
  }
  deleteCosecha  = async (Id) => {
    if (window.confirm("¿Esta seguro que desea ELIMINAR este registro?")){
      await axios.delete('http://localhost:5000/cosecha/' + Id);
      this.getCosechas();
    }
    
}
  render() {
    return (
      <div className="col-md-12">
        <div className="card">
          <div className="card-header card-header-success">
            <h4 className="card-title ">Cosecha</h4>
            <Link class="btn btn-sm btn-success" to="/cosechas/form"> + Cosecha</Link>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead className=" text-success">
                  <th>Nombre de la planta</th>
                  <th>Fecha de inicio</th>
                  <th>Numero de plantas</th>
                  <th>Produccion final</th>
                  <th>Nivel THC</th>
                  <th>Nivel CBD</th>
                  <th>Configurar</th>
                  <th>Eliminar</th>
                </thead>
                <tbody>
                {this.state.cosechas.map( cosecha =>(
                  <tr>
                    <td class="text-success">{cosecha.nombre_planta}</td>
                    <td>{cosecha.fecha_inicio}</td>
                    <td>{cosecha.numero_plantas}</td>
                    <td>{cosecha.produccion_final}</td>
                    <td>{cosecha.nivel_thc}</td>
                    <td>{cosecha.nivel_cbd}</td>
                    <td><Link to={"/cosechas/form/" + cosecha._id} className="btn btn-secondary " > <i className="material-icons">edit</i> </Link></td>
                    <td><button className="btn btn mr-2" onClick={() => this.deleteCosecha(cosecha._id)}>
                      <i className="material-icons">delete</i> </button></td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TablaCosecha;
