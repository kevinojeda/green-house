import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class TablaEspecificaciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      especificaciones: []
    };
    this.getEspecificaciones = this.getEspecificaciones.bind(this);
    this.deleteEspecificacion = this.deleteEspecificacion.bind(this);
  }
  async componentDidMount() {
    this.getEspecificaciones();
  }
  getEspecificaciones = async () => {
    const res = await axios
      .get("http://localhost:5000/especificacion/")
      .catch(function(error) {
        console.log(error);
      });
    this.setState({ especificaciones: res.data });

    console.log(this.state);
  };
  deleteEspecificacion = async Id => {
    if (window.confirm("¿Esta seguro que desea eliminar este registro?")) {
      await axios.delete("http://localhost:5000/especificacion/" + Id);
      this.getEspecificaciones();
    }
  };
  render() {
    return (
      <div className="col-md-12">
        <div className="card">
          <div className="card-header card-header-warning">
            <h4 className="card-title ">ESPECIFICACIONES</h4>
            <Link class="btn btn-sm btn-warning" to="/especificaciones/form">
              {" "}
              + Especificacion
            </Link>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead className=" text-warning">
                  <th>Semana</th>
                  <th>Temperatura dia</th>
                  <th>Temperatura Noche</th>
                  <th>Humedad dia</th>
                  <th>Humedad noche</th>
                  <th>Horas de luz</th>
                  <th>CO2</th>
                  <th>Configurar</th>
                  <th>Eliminar</th>
                </thead>
                <tbody>
                  {this.state.especificaciones.map(especificacion => (
                    <tr>
                      <td class="text-warning">{especificacion.semana}</td>
                      <td>{especificacion.tem_dia}</td>
                      <td>{especificacion.tem_noche}</td>
                      <td>{especificacion.hum_dia}</td>
                      <td>{especificacion.hum_noche}</td>
                      <td>{especificacion.horas_luz}</td>
                      <td>{especificacion.CO2}</td>
                      <td>
                        <Link
                          to={"/especificaciones/form/" + especificacion._id}
                          className="btn btn-secondary "
                        >
                          {" "}
                          <i className="material-icons">edit</i>{" "}
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn mr-2"
                          onClick={() =>
                            this.deleteEspecificacion(especificacion._id)
                          }
                        >
                          <i className="material-icons">delete</i>{" "}
                        </button>
                      </td>
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
export default TablaEspecificaciones;
