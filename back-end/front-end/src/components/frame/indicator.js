import React, { Component } from "react";
import Medicion from "./indicator/medicion";

import axios from 'axios';

class Indicators extends Component {
  constructor(props) {
    super(props);
    this.state = {
      luz: false ,
      temperatura: '',
      humedad: '',
      CO2: '' , 
      espesificacion: []
    };
    this.getMedicion = this.getMedicion.bind(this);
    this.getEspesificacion = this.getEspesificacion.bind(this);
  }
  getEspesificacion = async () => {
    const res1  = await axios.get('http://localhost:5000/especificacion/')
    .catch(function (error) {      console.log(error);  });
    this.setState({ 
      espesificacion: res1.data[0]
    });
    console.log(res1.data);
  }
  getMedicion = async () => {    
    const res  = await axios.get('http://10.152.170.50')
    .catch(function (error) {      console.log(error);  });
    console.log(res.data);
    const newMedicion = {
      luz: res.data.luz ,
      temperatura: res.data.temperatura ,
      humedad: res.data.humedad ,
      CO2: res.data.CO2
    };
    this.setState({ 
      luz: res.data.luz ,
      temperatura: res.data.temperatura ,
      humedad: res.data.humedad ,
      CO2: res.data.CO2 ,
    });
    await axios.post('http://localhost:5000/medicion/', newMedicion)
    .catch(function (error) {      console.log(error);  });
    //------------------------------------ SET ALARM -------------------------------------
    // Rangos Permitidos
    const rango_temp = 1;
    const rango_hum = 1;
    const rango_CO = 1;
    var alarma = false;
    //Verifica Luz segun la especificacion y los rangos
    if (this.state.luz){ alarma = true; }
    //Verifica Temperatura segun la especificacion y los rangos
    else if((this.state.temperatura > (this.state.espesificacion.tem_dia+rango_temp))
            || (this.state.temperatura < (this.state.espesificacion.tem_dia-rango_temp))){ alarma = true; }
    //Verifica Humedad segun la especificacion y los rangos
    else if((this.state.humedad > (this.state.espesificacion.hum_dia + rango_hum))
            || (this.state.humedad < (this.state.espesificacion.hum_dia - rango_hum))){ alarma = true; }
    //Verifica CO2 segun la especificacion y los rangos
    else if((this.state.CO2 > (this.state.espesificacion.CO2+rango_CO))
            || (this.state.CO2 < (this.state.espesificacion.CO2-rango_CO))){ alarma = true; }
    if (alarma){
      const res = await axios.post('http://localhost:5000/alarma/', newMedicion)
      .catch(function (error) {      console.log(error);  });
      console.log(res);
    }
  }
  componentDidMount() {
    this.getEspesificacion();
    this.getMedicion();
    this.interval = setInterval(() => this.getMedicion() ,5000);
  }
  render() {
    return (
      <div className="row">
        <Medicion bigIcon="wb_sunny" name="Luz" value={this.state.luz ? 'ON' : 'OFF'} unity="" smallIcon="warning" alert="La luminosidad esta estable" color="warning"/>
        <Medicion bigIcon="toys" name="Temperatura" value={this.state.temperatura}  unity="°C" smallIcon="warning" alert="La temperatura esta muy alta" color="success"/>
        <Medicion bigIcon="wb_cloudy" name="Humedad" value={this.state.humedad}  unity="%" smallIcon="warning" alert="La humedad esta muy baja" color="info"/>
        <Medicion bigIcon="toll" name="CO2" value={this.state.CO2}  unity="PPM" smallIcon="warning" alert="Nivel de CO2 muy alto" color="danger"/>
        
      </div>
      
    );
  }
}

export default Indicators;
