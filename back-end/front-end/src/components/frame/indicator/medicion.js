import React, { Component } from "react";

class Medicion extends Component{
    render(){
        return (
            <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className={"card-header card-header-"+this.props.color+" card-header-icon"}>
                <div className="card-icon">
                  <i className="material-icons">{this.props.bigIcon}</i>
                </div>
                <p className="card-category">{this.props.name}</p>
                <h3 className="card-title">
                {this.props.value}
                  <small>{this.props.unity}</small>
                </h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons text-danger">{this.props.smallIcon}</i>
                  <a>{this.props.alert}</a>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default Medicion;