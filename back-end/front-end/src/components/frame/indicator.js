import React, { Component } from "react";

class Indicators extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-header card-header-warning card-header-icon">
              <div className="card-icon">
                <i className="material-icons">content_copy</i>
              </div>
              <p className="card-category">Temperatura</p>
              <h3 className="card-title">
                26
                <small>°C</small>
              </h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons text-danger">warning</i>
                <a href="#pablo">Get More Space...</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-header card-header-success card-header-icon">
              <div className="card-icon">
                <i className="material-icons">store</i>
              </div>
              <p className="card-category">Humedad</p>
              <h3 className="card-title">40%</h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons">date_range</i> Last 24 Hours
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-header card-header-danger card-header-icon">
              <div className="card-icon">
                <i className="material-icons">info_outline</i>
              </div>
              <p className="card-category">CO2</p>
              <h3 className="card-title">300 ppm</h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons">local_offer</i> Tracked from
                Github
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-header card-header-info card-header-icon">
              <div className="card-icon">
                <i className="fa fa-twitter"></i>
              </div>
              <p className="card-category">Luz</p>
              <h3 className="card-title">YES</h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons">update</i> Just Updated
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Indicators;
