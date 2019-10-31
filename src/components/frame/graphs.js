import React, { Component } from 'react';

class Graphs extends Component{
    render(){
        return (
            <div className="row">
              <div className="col-md-4">
                <div className="card card-chart">
                  <div className="card-header card-header-success">
                    <div className="ct-chart" id="dailySalesChart"></div>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Temperatura</h4>
                    <p className="card-category">
                      <span className="text-success">
                        <i className="fa fa-long-arrow-up"></i> 55%{" "}
                      </span>{" "}
                      La temperatura aumentó. 
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="stats">
                      <i className="material-icons">access_time</i> updated 4
                      minutes ago
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-chart">
                  <div className="card-header card-header-info">
                    <div className="ct-chart" id="websiteViewsChart"></div>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Humedad</h4>
                    <p className="card-category">Estable</p>
                  </div>
                  <div className="card-footer">
                    <div className="stats">
                      <i className="material-icons">access_time</i> campaign
                      sent 2 days ago
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-chart">
                  <div className="card-header card-header-danger">
                    <div className="ct-chart" id="completedTasksChart"></div>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">CO2</h4>
                    <p className="card-category">Estable</p>
                  </div>
                  <div className="card-footer">
                    <div className="stats">
                      <i className="material-icons">access_time</i> campaign
                      sent 2 days ago
                    </div>
                  </div>
                </div>
              </div> 
            </div>
            
        );
    }
}

export default Graphs;