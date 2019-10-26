import React, { Component } from "react";
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';

class FormCosecha extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      _id: '',
      fecha_inicio: new Date(),
      nombre_planta: '',
      numero_plantas: '',
      produccion_final: '',
      nivel_thc: '',
      nivel_cbd: ''
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
        const res = await axios.get('http://localhost:5000/cosecha/' + id);
        this.setState({
          fecha_inicio: new Date(res.data.fecha_inicio) ,
          nombre_planta: res.data.nombre_planta ,
          numero_plantas: res.data.numero_plantas ,
          produccion_final: res.data.produccion_final ,
          nivel_thc: res.data.nivel_thc ,
          nivel_cbd: res.data.nivel_cbd ,
          _id: res.data._id ,
          editing: true
        });
    }
    catch(error) {
      console.error(error);
    }
    }
  onSubmit = async (e) => {
    const newCosechaData = {
          fecha_inicio: this.state.fecha_inicio ,
          nombre_planta: this.state.nombre_planta ,
          numero_plantas: this.state.numero_plantas ,
          produccion_final: this.state.produccion_final ,
          nivel_thc: this.state.nivel_thc ,
          nivel_cbd: this.state.nivel_cbd
    };
    if (this.state.editing) { 
      if (window.confirm("¿Esta seguro que desea EDITAR este registro?")){
        await axios.put('http://localhost:5000/cosecha/' + this.state._id, newCosechaData);
      } 
    } else {
        await axios.post('http://localhost:5000/cosecha/', newCosechaData);
    }
    window.location.href = 'http://localhost:3000/cosechas';
  }
  handleChange(e) {
    const { name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  onChangeDate = fecha_inicio => {
    this.setState({ fecha_inicio });
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
            <form onSubmit={this.onSubmit}>
              <div className="row">
                  <div className="col-md-6">
                      <label className="bmd-label-floating">
                        Fecha de Inicio
                      </label><br/>
                      <DatePicker onChange={this.onChangeDate} className="form-control"
                        selected={this.state.fecha_inicio} required/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                      <label className="bmd-label-floating">
                        Nombre Planta
                      </label>
                      <input onChange={this.handleChange}  type="text" className="form-control" 
                       name="nombre_planta"  value={this.state.nombre_planta} required/>
                  </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                      <label className="bmd-label-floating">
                        Numero Plantas
                      </label>
                      <input onChange={this.handleChange}  type="text" className="form-control" 
                       name="numero_plantas"  value={this.state.numero_plantas}  pattern="^[0-9]+" required/>
                    </div>
                  <div className="col-md-6">
                      <label className="bmd-label-floating">Produccion (KG)</label>
                      <input onChange={this.handleChange}  type="text" className="form-control" 
                       name="produccion_final"  value={this.state.produccion_final}  pattern="^[0-9]+" required/>
                  </div>
                  <div className="col-md-6">
                      <label className="bmd-label-floating">Nivel THC (%)</label>
                      <input onChange={this.handleChange}   type="text" className="form-control" 
                       name="nivel_thc"  value={this.state.nivel_thc}  pattern="^[0-9]+" required/>
                  </div>
                  <div className="col-md-6">
                      <label className="bmd-label-floating">Nivel CBD (%)</label>
                      <input onChange={this.handleChange}   type="text" className="form-control" 
                       name="nivel_cbd"  value={this.state.nivel_cbd}  pattern="^[0-9]+" required/>
                  </div>
                </div>
                <Link to="/cosechas"  className="btn btn-success" > VOLVER</Link>
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
