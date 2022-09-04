import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import MarketPage from "./components/pages/MaketPage";
import { getItems, addItem, deleteItem } from "./services/ItemServices";
import NotFound from "./components/pages/NotFound";
import NavBar from "./components/large components/NavBar";
import SellPage from "./components/pages/SellPage";
import MarketContext from "./components/contexts/MarketContext";
import ItemPage from "./components/pages/ItemPage";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import UserContext from './components/contexts/UserContext';
import UserPage from "./components/pages/UserPage";
import { updateUser } from "./services/UserService";
import { deleteItm } from "./services/ItemServices";
import { updateItm } from "./services/ItemServices";
import ConnectPage from './components/pages/ConnectPage';
import { updateMessage } from './services/UserService';
import MessagePage from "./components/pages/MessagePage";
import Logout from "./components/pages/Logout";
import CartPage from './components/pages/CartPage';
class App extends Component {
  state = {
    items: []
  };

  async componentDidMount() {
      const jwt = localStorage.getItem("token");
      if (jwt) {
        const user = jwtDecode(jwt)
      this.setState({user});}
    const {data} = await getItems();
      this.setState({items: data});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items !== this.state.items && this.state.user) {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({user});
    }
  }

  handleDelete = async (item) => {
    if (!item) return;
    const originalItems = this.state.items;
    const items = this.state.items.filter((i) => i._id !== item._id);
    this.setState({items});
    try {
      await deleteItm(item);
      toast.success('🦄 Item deleted!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } catch (e) {
      //alert("delete failed...");
      if (e.response && e.response.status === 404) {
        alert("404 item does not exist");
      }
      this.setState(originalItems);
    }
  };

  handlePrice = async (data) => {
    const price = {buyer:this.state.user._id, price:data.price, comment:data.comment}
    let items = this.state.items;
    let [item] = items.filter((i)=> i._id === data.item);
    let otherItems = items.filter((i)=> i._id !== data.item);
    item.prices = [...item.prices, price];
    items = [...otherItems, item];
    this.setState({items});
    let usr = this.state.user;
    console.log("usr is", usr);
    usr.sales = [...usr.sales, item];
    try {
      await updateItm(item);
      await updateUser(usr);
      setTimeout(() => toast.success('🦄 Price submitted!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }), 200);
    } catch (ex) {
      console.log("failed to update price", ex);
    }
  }

  handleSell = async (newItem) => {
    if (!newItem) return;
    const originalItems = this.state.items;
    let newItems = [...this.state.items, newItem]
    this.setState({items:newItems});
    let newSales = [...this.state.user.sales, newItem]
    let temp = {...this.state.user};
    temp.sales = newSales;
    this.setState({user:temp});
    try {
      const {data} = await addItem(newItem);
      newItems = [...originalItems, data];
      this.setState({items:newItems});
      console.log("new item", this.state.items);
      newSales = [...this.state.user.sales, data]
      temp.sales = newSales;
      const user = await updateUser(temp);
      this.setState({user});
      setTimeout(() => toast.success('🦄 Item deleted!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }), 200);
    } catch (ex) {

      console.log("failed to add item", ex)
    }
  }

  handleMessage = async (data) => {
    const da = {from: this.state.user._id, to: data.to, comment:data.comment}
    try {
      await updateMessage(da);
    } catch (ex) {
      console.log("message failed...", ex);
    }
  }


  render() {
    console.log(this.state.items);
    console.log(this.state.user);
    return (
      <div>
        <ToastContainer />
        <UserContext.Provider value={this.state.user}>
          <NavBar/>
        </UserContext.Provider>
        <div className="content">
          <Routes>
            <Route
              path="/Market"
              element={
                <MarketContext.Provider value={this.handleDelete}>
              <MarketPage items={this.state.items}/>
              </MarketContext.Provider>}
            />

            <Route
              path="/Market/:id"
              element={
                <MarketContext.Provider value={this.state.items}>
              <ItemPage items={this.state.items} handlePrice={this.handlePrice}/>
              </MarketContext.Provider>}
            />

            <Route
              path="/Messages"
              element={
                <UserContext.Provider value={this.state.user}>
                  <MessagePage/>
              </UserContext.Provider>}
            />

            <Route
              path="/Connect/:id"
              element={
                <ConnectPage items={this.state.items} handleMessage={this.handleMessage}/>
              }
            />

            <Route
              path="/Register"
              element={
              <RegisterPage/>}
            />

            <Route
              path="/Logout"
              element={<Logout/>}
            />

            <Route
              path="/User"
              element={
                <MarketContext.Provider value={[this.handleDelete, this.state.items]}>
              <UserContext.Provider value={this.state.user}>
                <UserPage/>
              </UserContext.Provider>
              </MarketContext.Provider>}
            />

            <Route
              path="/Login"
              element={
              <LoginPage/>}
            />

            <Route
              path="/Sell"
              element={
                  <SellPage handleSell={this.handleSell} user={this.state.user}/>}
            />

            <Route
              path="/Cart"
              element={
                <UserContext.Provider value={this.state.user}>
              <CartPage/>
              </UserContext.Provider>}
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
