import React from 'react';


import SideBarMenu from './components/sideBarMenu';
import DropDownMenu from './components/dropDownMenu';
import SearchBar from './components/searchBar';
import Indicators from './components/indicator';
import Graphs from './components/graphs';
import Tables from './components/tables';

function App() {
  return (
    <div className="App">
        <div>
        <div className="wrapper ">
          <SideBarMenu/>
          <div className="main-panel">
            <SearchBar/>
            <div className="content">
              <div className="container-fluid">
                <Indicators/>
                <Graphs/>
                <Tables/>
              </div>
            </div>
            <footer className="footer">
              <div className="container-fluid">
                <nav className="float-left">
                  <ul>
                    <li>
                      <a href="https://www.creative-tim.com">Creative Tim</a>
                    </li>
                    <li>
                      <a href="https://creative-tim.com/presentation">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="http://blog.creative-tim.com">Blog</a>
                    </li>
                    <li>
                      <a href="https://www.creative-tim.com/license">
                        Licenses
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="copyright float-right">
                  &copy;
                  <script>document.write(new Date().getFullYear())</script>,
                  made with <i className="material-icons">favorite</i> by
                  <a href="https://www.creative-tim.com" target="_blank">
                    Creative Tim
                  </a>{" "}
                  for a better web.
                </div>
              </div>
            </footer>
          </div>
        </div>
        <div className="fixed-plugin">
          <div className="dropdown show-dropdown">
            <a href="#" data-toggle="dropdown">
              <i className="fa fa-cog fa-2x"> </i>
            </a>
            <DropDownMenu/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
