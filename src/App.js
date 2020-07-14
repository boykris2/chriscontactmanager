import React, { Component } from "react";
//import Chriscontact from "./components/Chriscontact";
import Header from "./components/layout/Header";
import { Provider } from "./context";
//import Contact from "./components/Contact";
import Contacts from "./components/contacts/Contacts";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
