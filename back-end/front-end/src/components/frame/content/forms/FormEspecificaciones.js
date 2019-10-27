import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class FormEspecificaciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      _id: '',
      semana: '',
      tem_dia: '',
      tem_noche: '',
      hum_dia: '',
      hum_noche: '',
      horas_luz: '',
      CO2: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  async componentDidMount() {
    var id = ''
    try {
      id  = this.props.match.params.id
      console.log(id);
        const res = await axios.get('http://localhost:5000/especificacion/' + id);
        this.setState({
          semana: res.data.semana,
          tem_dia: res.data.tem_dia,
          tem_noche: res.data.tem_noche,
          hum_dia: res.data.hum_dia,
          hum_noche: res.data.hum_noche,
          horas_luz: res.data.horas_luz,
          CO2: res.data.CO2 ,
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
    const newEspecificacion = {
          semana: this.state.semana,
          tem_dia: this.state.tem_dia,
          tem_noche: this.state.tem_noche,
          hum_dia: this.state.hum_dia,
          hum_noche: this.state.hum_noche,
          horas_luz: this.state.horas_luz,
          CO2: this.state.CO2
    };
    if (this.state.editing) { 
      if (window.confirm("¿Esta seguro que desea EDITAR este registro?")){
        await axios.put('http://localhost:5000/especificacion/' + this.state._id, newEspecificacion);
      } 
    } else {
        await axios.post('http://localhost:5000/especificacion/', newEspecificacion);
    }
    window.location.href = 'http://localhost:3000/especificaciones';
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
              <form onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="col-md-2">
                      <label className="bmd-label-floating">Semana</label>
                      <input onChange={this.handleChange}  name="semana" type="text" 
                        className="form-control" value={this.state.semana} pattern="^[0-9]+" required/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                      <label className="bmd-label-floating">
                        Temperatura Dia
                      </label>
                      <input onChange={this.handleChange}  name="tem_dia" type="text" className="form-control" 
                       value={this.state.tem_dia} pattern="^[0-9]+" required/>
                  </div>
                  <div className="col-md-6">
                      <label className="bmd-label-floating">
                        Temperatura Noche
                      </label>
                      <input onChange={this.handleChange}  name="tem_noche" type="text" className="form-control" 
                       value={this.state.tem_noche} pattern="^[0-9]+" required/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                      <label className="bmd-label-floating">Humedad Dia</label>
                      <input onChange={this.handleChange}  name="hum_dia" type="text" className="form-control" 
                       value={this.state.hum_dia} pattern="^[0-9]+" required/>
                  </div>
                  <div className="col-md-6">
                      <label className="bmd-label-floating">
                        Humedad Noche
                      </label>
                      <input onChange={this.handleChange}  name="hum_noche" type="text" className="form-control" 
                       value={this.state.hum_noche} pattern="^[0-9]+" required/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                      <label className="bmd-label-floating">Horas Luz</label>
                      <input onChange={this.handleChange}  name="horas_luz" type="text" className="form-control" 
                       value={this.state.horas_luz} pattern="^[0-9]+" required/>
                  </div>
                  <div className="col-md-6">
                      <label className="bmd-label-floating">CO2</label>
                      <input onChange={this.handleChange}  name="CO2" type="text" className="form-control" 
                       value={this.state.CO2} pattern="^[0-9]+" required/>
                  </div>
                </div>
                <Link to="/especificaciones"  className="btn btn-warning" > VOLVER</Link>
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
