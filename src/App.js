import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import MarketPage from "./components/pages/MaketPage";
import getItems from './apis/fake_items';
import NotFound from "./components/pages/NotFound";
import NavBar from "./components/large components/NavBar";

class App extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    const items = getItems();
    console.log("items we read is", items);
    this.setState({items});
  }

  render() {
    console.log(this.state.items);
    return (
      <div>
        <ToastContainer />
        <NavBar/>
        <div className="content">
          <Routes>
          <Route
              path="/Market"
              element={<MarketPage items={this.state.items}/>}
            />
            
            <Route path="/not-found" element={<NotFound />} />
            <Route
              path="/"
              element={
                <Navigate to="/Market" replace />
              }
            />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
