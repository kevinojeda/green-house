import React, { Component } from "react";
class TablaCosecha extends Component {
  render() {
    return (
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary">
            <h4 class="card-title ">Cosecha</h4>
            <p class="card-category"> Datos de la cosecha</p>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table">
                <thead class=" text-primary">
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
                    <td>CRIPY :)</td>
                    <td>20</td>
                    <td class="text-primary">5KG</td>
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
