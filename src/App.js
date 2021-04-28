import "./styles.css";
import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {StateProvider,ProductProvider} from "./Providers/stateProvider";
export default function App() {
  return (
    
    <ProductProvider>
    <StateProvider>
    <div>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
     </StateProvider>
    </ProductProvider>
  );
}
