import React, { Component } from "react";
class TablaAlarma extends Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="card">
          <div className="card-header card-header-danger">
            <h4 className="card-title ">ALARMA</h4>  
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead className=" text-primary">
                  <th>Medicion</th>
                </thead>
                <tbody>
                  <tr>
                    <td>1111111</td>
                  </tr>
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
