import React, { Component } from "react";
class FormCosecha extends Component {
  
  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header card-header-success">
              <h4 className="card-title">Formulario cosecha</h4>
              <p className="card-category">Complete la informacion</p>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="bmd-label-floating">
                        Inicio de cosecha
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">
                        Nombre planta
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">
                        Numero plantas
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="bmd-label-floating">Produccion</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="bmd-label-floating">Nivel THC</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="bmd-label-floating">Nivel CO2</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-success pull-right">
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
export default FormCosecha;
