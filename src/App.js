import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import Registration from "./pages/Registration";
import "./default.scss";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import { auth } from "./firebase/utils";

const initialState = {
  currentUser: null,
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged((userAuth) => {
      if (!userAuth) return;
      this.setState({
        currentUser: userAuth,
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
