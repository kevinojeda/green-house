import React, { Component } from "react";
class FormEspecificaciones extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header card-header-warning">
              <h4 className="card-title">Formulario especificaciones</h4>
              <p className="card-category">Complete la informacion</p>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="bmd-label-floating">Semana</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">
                        Teperatura dia
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">
                        Temperatura Noche
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="bmd-label-floating">Humedad dia</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="bmd-label-floating">
                        Humedad noche
                      </label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="bmd-label-floating">Horas luz</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="bmd-label-floating">CO2</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-warning pull-right">
                  GUARDAR
                </button>
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
