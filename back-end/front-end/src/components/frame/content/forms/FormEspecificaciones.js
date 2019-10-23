import React, { Component } from "react";
class FormEspecificaciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      semana: '',
      tem_dia: '',
      tem_noche: '',
      hum_dia: '',
      hum_noche: '',
      horas_luz: '',
      CO2: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.addEspecificaciones = this.addEspecificaciones.bind(this);
  }
  addEspecificaciones(e){
    e.preventDefault();
    console.log(this.state);
    var newData = JSON.stringify(this.state);
   
    fetch('http://localhost:5000/especificaciones/', {
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
            <div className="card-header card-header-warning">
              <h4 className="card-title">Formulario Especificaciones</h4>
              <p className="card-category">Complete la Informacion</p>
            </div>
            <div className="card-body">
              <form onSubmit={this.addEspecificaciones}>
                <div className="row">
                  <div className="col-md-2">
                    <div className="form-group">
                      <label className="bmd-label-floating">Semana</label>
                      <input onChange={this.handleChange}  name="semana" type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">
                        Temperatura Dia
                      </label>
                      <input onChange={this.handleChange}  name="tem_dia" type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">
                        Temperatura Noche
                      </label>
                      <input onChange={this.handleChange}  name="tem_noche" type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">Humedad Dia</label>
                      <input onChange={this.handleChange}  name="hum_dia" type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">
                        Humedad Noche
                      </label>
                      <input onChange={this.handleChange}  name="hum_noche" type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">Horas Luz</label>
                      <input onChange={this.handleChange}  name="horas_luz" type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">CO2</label>
                      <input onChange={this.handleChange}  name="CO2" type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <input type="submit" value="Guardar" className="btn btn-warning pull-right"/>
                <div className="clearfix"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormEspecificaciones;
