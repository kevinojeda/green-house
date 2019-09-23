import React, { Component } from 'react';
import SideBarMenu from './all/sideBarMenu';
import SearchBar from './all/searchBar';
import Indicators from './all/indicator';
import Graphs from './all/graphs';
import Tables from './all/tables';
import Footer from './all/footer';

class All extends Component {
  render() {
    return (
      <div className="wrapper ">
        <SideBarMenu />
        <div className="main-panel">
          <SearchBar />
          <div className="content">
            <div className="container-fluid">
              <Indicators />
              <Graphs />
              <Tables />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
  
  export default All;