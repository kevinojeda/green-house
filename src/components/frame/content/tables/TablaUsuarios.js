import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class TablaUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: []
    };
    this.getUsuarios = this.getUsuarios.bind(this);
    this.deleteUsuario = this.deleteUsuario.bind(this);
  }
  async componentDidMount() {
    this.getUsuarios();
  }
  getUsuarios = async () => {
    const res =  await axios.get('http://localhost:5000/persona/')
    .catch(function (error) {      console.log(error);  })
    this.setState({ usuarios: res.data})

    console.log(this.state);
  }
  deleteUsuario  = async (Id) => {
    if (window.confirm("¿Esta seguro que desea eliminar este registro?")){
      await axios.delete('http://localhost:5000/persona/' + Id);
      this.getUsuarios();
    }   
  }
  render() {
    return (
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-info">
            <h4 class="card-title ">Usuarios</h4>
            <Link class="btn btn-sm btn-info" to="/usuarios/form"> + Usuarios</Link>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table">
                <thead class=" text-info">
                  <th>Nombre</th>
                  <th>Telefono</th>
                  <th>Cedula</th>
                  <th>Direccion</th>
                  <th>Configurar</th>
                  <th>Eliminar</th>
                </thead>
                <tbody>
                  {this.state.usuarios.map( usuario =>(
                  <tr>
                    <td class="text-info">{usuario.nombre}</td>
                    <td>{usuario.telefono}</td>
                    <td>{usuario.cedula}</td>
                    <td>{usuario.direccion}</td>
                    <td><Link to={"/usuarios/form/" + usuario._id} className="btn btn-secondary " > <i className="material-icons">edit</i> </Link></td>
                    <td><button className="btn btn mr-2" onClick={() => this.deleteUsuario(usuario._id)}>
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
export default TablaUsuarios;
