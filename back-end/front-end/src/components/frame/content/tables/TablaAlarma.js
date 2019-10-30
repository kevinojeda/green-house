import React, { Component } from "react";
import axios from 'axios';
class TablaAlarma extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alarmas: []
    };
    this.getAlarmas = this.getAlarmas.bind(this);
    this.deleteAlarmas = this.deleteAlarmas.bind(this);
  }
  async componentDidMount() {
    this.getAlarmas();
  }
  getAlarmas = async () => {
    const res =  await axios.get('http://localhost:5000/alarma/')
    .catch(function (error) {      console.log(error);  })
    this.setState({ alarmas: res.data})

    console.log(this.state);
  }
  deleteAlarmas  = async (Id) => {
    if (window.confirm("¿Esta seguro que desea eliminar este registro?")){
      await axios.delete('http://localhost:5000/alarma/' + Id);
      this.getUsuarios();
    }   
  }
  render() {
    return (
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-danger">
            <h4 class="card-title ">Alarma</h4>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table">
                <thead class=" text-danger">
                  <th>Fecha/Hora</th>
                  <th>Temperatura</th>
                  <th>Humedad</th>
                  <th>CO2</th>
                  <th>Luz</th>
                  <th>eliminar</th>
                </thead>
                <tbody>
                {this.state.alarmas.map( alarma =>(
                  <tr>
                    <td class="text-info">{alarma.timestamps}</td>
                    <td>{alarma.temperatura}</td>
                    <td>{alarma.humedad}</td>
                    <td>{alarma.CO2}</td>
                    <td>{alarma.luz ? 'ON' : 'OFF'}</td>
                    <td><button className="btn btn mr-2" onClick={() => this.deleteAlarmas(alarma._id)}>
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
export default TablaAlarma;
