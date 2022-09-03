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
import SellPage from "./components/pages/SellPage";

class App extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    const items = getItems();
    this.setState({items});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items !== this.state.items) {
      // Now fetch the new data here.
      console.log("prevState is", prevState.items);
      console.log("now the state is", this.state.items);
    }
  }

  handleSell = (pic, name, description) => {
    console.log("handleSell called")
    const newItem = {pic: pic, name: name, description:description};
    const newItems = {...this.state.items, newItem}
    this.setState({items:newItems});
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

            <Route
              path="/Sell"
              element={<SellPage handleSell={this.handleSell}/>}
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
