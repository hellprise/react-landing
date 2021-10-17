import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import SignupPage from "./pages/SignupPage";
import PricingPage from "./pages/PricingPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/pricing" exact component={PricingPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
