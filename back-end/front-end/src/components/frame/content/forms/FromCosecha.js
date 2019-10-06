import React, { Component } from "react";
import DatePicker from "react-datepicker";

class FormCosecha extends Component {
  

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
              <form>
              <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">
                        Fecha de Inicio
                      </label>
                      <input type="text" className="form-control" name="fecha_inicio"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="bmd-label-floating">
                        Nombre Planta
                      </label>
                      <input type="text" className="form-control" name="nombre"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">
                        Numero Plantas
                      </label>
                      <input type="text" className="form-control" name="numer"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">Produccion (KG)</label>
                      <input type="text" className="form-control" name="prod"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">Nivel THC (%)</label>
                      <input type="email" className="form-control" name="thc"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">Nivel CBD (%)</label>
                      <input type="text" className="form-control" name="cbd"/>
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
