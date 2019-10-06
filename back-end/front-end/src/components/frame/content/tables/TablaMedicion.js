import React, {Component} from "react";
class TablaMedicion extends Component{
    render(){
        return(
<div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">MEDICION</h4>
                  <p class="card-category"> Datos de medicion</p>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>
                          Temperatura
                        </th>
                        <th>
                          Humedad
                        </th>
                        <th>
                          CO2
                        </th>
                        <th>
                          Luz
                        </th>
                        <th>
                          Hora
                        </th>
                        <th>
                            Cosecha
                        </th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            25 grados
                          </td>
                          <td>
                            234
                          </td>
                          <td>
                            234
                          </td>
                          <td class="text-primary">
                            34
                          </td>
                          <td>
                              3:30
                          </td>
                          <td>
                              1
                          </td>
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
            export default TablaMedicion;