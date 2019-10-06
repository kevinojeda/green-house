import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class TablaEspecificaciones extends Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="card">
          <div className="card-header card-header-warning">
            <h4 className="card-title ">ESPECIFICACIONES</h4>
            <Link class="btn btn-sm btn-warning" to="/especificaciones/form"> + Especificacion</Link>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead className=" text-primary">
                  <th>Semana</th>
                  <th>Temperatura dia</th>
                  <th>Temperatura Noche</th>
                  <th>Humedad dia</th>
                  <th>Humedad noche</th>
                  <th>Horas de luz</th>
                  <th>CO2</th>
                  <th>Cosecha</th>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>33G</td>
                    <td>24G</td>
                    <td className="text-primary">34</td>
                    <td>53</td>
                    <td>12H</td>
                    <td>56</td>
                    <td>1</td>
                  </tr>
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
