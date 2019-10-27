import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class FormUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      _id: '',
      nombre: '',
      telefono: '',
      cedula: '',
      direccion: '',
      user: '',
      password: '',
      administrador: false,
      analista: false,
      operario: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeBoolean = this.handleChangeBoolean.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  async componentDidMount() {
    var id = ''
    try {
      id  = this.props.match.params.id
      console.log(id);
        const res = await axios.get('http://localhost:5000/persona/' + id);
        this.setState({
          nombre: res.data.nombre,
          telefono: res.data.telefono,
          cedula: res.data.cedula ,
          direccion: res.data.direccion ,
          user: res.data.user ,
          password: res.data.password ,
          administrador: res.data.administrador ,
          analista: res.data.analista ,
          operario: res.data.operario ,
          _id: res.data._id ,
          editing: true
        });
    }
    catch(error) {
      console.error(error);
    }
    }
  onSubmit = async (e) => {
    
    e.preventDefault();
    const newUserData = {
      nombre: this.state.nombre,
      telefono: this.state.telefono,
      cedula: this.state.cedula ,
      direccion: this.state.direccion ,
      user: this.state.user ,
      password: this.state.password ,
      administrador: this.state.administrador ,
      analista: this.state.analista ,
      operario: this.state.operario
    };
    if (this.state.editing) { 
      if (window.confirm("¿Esta seguro que desea EDITAR este registro?")){
        await axios.put('http://localhost:5000/persona/' + this.state._id, newUserData);
      } 
    } else {
        await axios.post('http://localhost:5000/persona/', newUserData);
    }
    window.location.href = 'http://localhost:3000/usuarios';
  }
  handleChange(e) {
    const { name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  handleChangeBoolean(e) {
    const { name, checked} = e.target;
      this.setState({
        [name]: checked
      });    
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header card-header-info">
              <h4 className="card-title">Formulario usuarios</h4>
              <p className="card-category">Completa su informacion</p>
            </div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="col-md-9">
                      <label className="bmd-label-floating">Nombre</label>
                      <input onChange={this.handleChange} type="text" className="form-control" 
                        name="nombre" value={this.state.nombre} required/>
                  </div>
                  <div className="col-md-3">
                      <label className="bmd-label-floating">Cedula</label>
                      <input  onChange={this.handleChange}  type="text" className="form-control" 
                        name="cedula" value={this.state.cedula} pattern="^[0-9]+" required/>
                  </div>
                </div>
                <br/><div className="row">
                  <div className="col-md-3">
                      <label className="bmd-label-floating">Telefono</label>
                      <input  onChange={this.handleChange} type="text" className="form-control" 
                        name="telefono" value={this.state.telefono} required/>
                  </div>
                  <div className="col-md-9">
                      <label className="bmd-label-floating">Direccion</label>
                      <input  onChange={this.handleChange}  type="text" className="form-control" 
                        name="direccion" value={this.state.direccion} required/>
                  </div>
                </div>
                <br/><div className="row">
                  <div className="col-md-6">
                      <label className="bmd-label-floating">Usuario</label>
                      <input  onChange={this.handleChange}  type="text" className="form-control" 
                        name="user" value={this.state.user} required/>
                  </div>
                  <div className="col-md-6">
                      <label className="bmd-label-floating">Contraseña</label>
                      <input  onChange={this.handleChange}  type="password" className="form-control" 
                        name="password" value={this.state.password} required/>
                  </div>
                </div>
                <br/><div className="row">
                <div className="col-md-4">
                      <label className="bmd-label-floating">Administrador</label>
                      <input  onChange={this.handleChangeBoolean}  type="radio" className="form-control" 
                        name="administrador" checked={this.state.administrador} required/>
                  </div>
                  <div className="col-md-4">
                      <label className="bmd-label-floating">Analista</label>
                      <input  onChange={this.handleChangeBoolean}  type="radio" className="form-control" 
                        name="analista" checked={this.state.analista}/>
                  </div>
                  <div className="col-md-4">
                      <label className="bmd-label-floating">Operario</label>
                      <input  onChange={this.handleChangeBoolean}  type="radio" className="form-control" 
                        name="operario" checked={this.state.operario}/>
                  </div>
                  
                </div>
                <br/>

                <Link to="/usuarios"  className="btn btn-info" > VOLVER</Link>
                <input type="submit" value="Guardar" className="btn btn-info pull-right"/>
                <div className="clearfix"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormUsuarios;
