import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class TablaCosecha extends Component {
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
                  <th>Id</th>
                  <th>Fecha inicio</th>
                  <th>Nombre de la planta</th>
                  <th>Numero de plantas</th>
                  <th>Produccion final</th>
                  <th>Nivel THC</th>
                  <th>Nivel CBD</th>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>23/09/19</td>
                    <td>CRIPY :</td>
                    <td>20</td>
                    <td className="text-success">5KG</td>
                    <td>60%</td>
                    <td>45%</td>
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
export default TablaCosecha;
