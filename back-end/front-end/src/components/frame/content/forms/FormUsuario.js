import React, { Component } from "react";
class FormUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      telefono: '',
      cedula: '',
      direccion: '',
      user: '',
      password: '',
      administrador: '',
      analista: '',
      operario: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.addUsuario = this.addUsuario.bind(this);
  }
  addUsuario(e){
    fetch('http://localhost:5000/persona/', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => console.log(res)).catch(err => console.error(err));
  }
  handleChange(e) {
    const { name, value} = e.target;
    this.setState({
      [name]: value
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
              <form onSubmit={this.addUsuario}>
                <div className="row">
                  <div className="col-md-9">
                    <div className="form-group">
                      <label className="bmd-label-floating">Nombre</label>
                      <input type="text" className="form-control" name="nombre"/>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="bmd-label-floating">Cedula</label>
                      <input type="text" className="form-control" name="cedula"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="bmd-label-floating">Telefono</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="form-group">
                      <label className="bmd-label-floating">Direccion</label>
                      <input type="text" className="form-control" name="direccion"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">Usuario</label>
                      <input type="text" className="form-control" name="user"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">Contraseña</label>
                      <input type="text" className="form-control" name="password"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                      <label className="bmd-label-floating">Administrador</label>
                      <input type="text" className="form-control" name="administrador"/>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="bmd-label-floating">Analista</label>
                      <input type="text" className="form-control" name="analista"/>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="bmd-label-floating">Operario</label>
                      <input type="text" className="form-control" name="operario"/>
                    </div>
                  </div>
                  
                </div>
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
