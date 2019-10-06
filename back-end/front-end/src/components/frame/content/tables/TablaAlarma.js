import React, { Component } from "react";
class TablaAlarma extends Component {
  render() {
    return (
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-danger">
            <h4 class="card-title ">Alarma</h4>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table">
                <thead class=" text-danger">
                  <th>Fecha/Hora</th>
                  <th>Temperatura</th>
                  <th>Humedad</th>
                  <th>CO2</th>
                  <th>Luz</th>
                </thead>
                <tbody>
                  <tr>
                    <td>3:30 </td>
                    <td>25 °C</td>
                    <td>30 %</td>
                    <td>234 ppm</td>
                    <td class="text-danger">No</td>
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
export default TablaAlarma;
