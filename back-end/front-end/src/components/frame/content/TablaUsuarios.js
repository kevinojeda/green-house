import React, { Component } from "react";
class TablaUsuarios extends Component {
  render() {
    return (
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary">
            <h4 class="card-title ">Usuarios</h4>
            <p class="card-category"> Datos de usuarios</p>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table">
                <thead class=" text-primary">
                  <th>Nombre</th>
                  <th>Telefono</th>
                  <th>Cedula</th>
                  <th>Direccion</th>
                  <th>Administrador</th>
                  <th>Analista</th>
                  <th>Operario</th>
                  <th>Configurar</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Camilo Sierra</td>
                    <td>31213456865</td>
                    <td>1802388743</td>
                    <td class="text-primary">Bucaramanga</td>
                    <td>si</td>
                    <td>no</td>
                    <td>no</td>
                    <td>.</td>
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
export default TablaUsuarios;
