import React, { Component } from "react";
import Medicion from "./indicator/medicion";

class Indicators extends Component {
  render() {
    return (
      <div className="row">
        <Medicion bigIcon="toys" name="Temperatura" value="26" unity="°C" smallIcon="warning" alert="La temperatura esta muy alta" color="success"/>
        <Medicion bigIcon="wb_cloudy" name="Humedad" value="26" unity="%" smallIcon="warning" alert="La humedad esta muy baja" color="info"/>
        <Medicion bigIcon="wb_sunny" name="Luminosidad" value="40000" unity="Lx" smallIcon="warning" alert="La luminosidad esta estable" color="warning"/>
        <Medicion bigIcon="toll" name="CO2" value="500" unity="Ppm" smallIcon="warning" alert="Nivel de CO2 muy alto" color="danger"/>
      </div>
      
    );
  }
}

export default Indicators;
