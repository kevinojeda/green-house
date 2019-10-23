import React, { Component } from "react";

class FormCosecha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha_inicio: '',
      nombre_planta: '',
      numero_plantas: '',
      produccion_final: '',
      nivel_thc: '',
      nivel_cbd: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.addCosecha = this.addCosecha.bind(this);
  } 
  addCosecha(e){
    e.preventDefault();
    console.log(this.state);
    var newData = JSON.stringify(this.state);
   
    fetch('http://localhost:5000/cosecha/', {
      method: 'POST',
      body: newData,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log(res)

      
    }).catch(err => console.error(err));
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
            <div className="card-header card-header-success">
              <h4 className="card-title">Formulario Cosecha</h4>
              <p className="card-category">Complete la Informacion</p>
            </div>
            <div className="card-body">
            <form onSubmit={this.addCosecha}>
              <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      
                      
                      <input onChange={this.handleChange}  name="fecha_inicio" type="date" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="bmd-label-floating">
                        Nombre Planta
                      </label>
                      <input onChange={this.handleChange}  name="nombre_planta" type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">
                        Numero Plantas
                      </label>
                      <input onChange={this.handleChange}  name="numero_plantas" type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">Produccion (KG)</label>
                      <input onChange={this.handleChange}  name="produccion_final" type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">Nivel THC (%)</label>
                      <input onChange={this.handleChange}  name="nivel_thc" type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">Nivel CBD (%)</label>
                      <input onChange={this.handleChange}  name="nivel_cbd" type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <input type="submit" value="Guardar" className="btn btn-success pull-right"/>
                <div className="clearfix"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormCosecha;
