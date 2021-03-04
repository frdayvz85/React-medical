import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Drug from './pages/Drug/Drug';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path ="/" exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/contact' component={Contact} />
          <Route path='/drugs' component={Drug} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
