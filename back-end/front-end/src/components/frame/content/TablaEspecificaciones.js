import React, {Component} from "react";
class TablaEspecificaciones extends Component{
    render(){
        return(
<div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">ESPECIFICACIONES</h4>
                  <p class="card-category"> Datos de especificaciones</p>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>
                          Semana
                        </th>
                        <th>
                          Temperatura dia
                        </th>
                        <th>
                          Temperatura Noche
                        </th>
                        <th>
                          Humedad dia
                        </th>
                        <th>
                          Humedad noche
                        </th>
                        <th>
                          Horas de luz
                        </th>
                        <th>
                          CO2
                        </th>
                        <th>
                            Cosecha
                        </th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            1
                          </td>
                          <td>
                            33G
                          </td>
                          <td>
                            24G
                          </td>
                          <td class="text-primary">
                            34
                          </td>
                          <td>
                              53
                          </td>
                          <td>
                              12H
                          </td>
                          <td>
                              56
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
            export default TablaEspecificaciones;