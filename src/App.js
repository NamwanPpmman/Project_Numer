import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import Bisection from './pages/Root/Bisection';
import Falseposition from './pages/Root/Falseposition';
import Onepoint from './pages/Root/Onepoint';
import Cramer from './pages/Linear/Cramer';
import LinearLG from './pages/In&Ex/LinearLG';
import LinearNDD from './pages/In&Ex/LinearNDD';
import LinearSp from './pages/In&Ex/LinearSp';
import Linear from './pages/Regression/Linear';
import Trap from './pages/Integration/Trap';
import Simpson from './pages/Integration/Simpson';
import FW from './pages/Diff/FW';
import BW from './pages/Diff/BW';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Header/>

      <div className="container">
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Intro} />
            <Route exact path="/Bisection" component={Bisection} />
            <Route exact path="/Falseposition" component={Falseposition} />
            <Route exact path="/Cramer" component={Cramer} />
            <Route exact path="/Onepoint" component={Onepoint} />
            <Route exact path="/LinearNDD" component={LinearNDD} />
            <Route exact path="/LinearLG" component={LinearLG} />
            <Route exact path="/LinearSp" component={LinearSp} />
            <Route exact path="/Linear" component={Linear} />
            <Route exact path="/Trap" component={Trap} />
            <Route exact path="/Simpson" component={Simpson} />
            <Route exact path="/FW" component={FW} />
            <Route exact path="/BW" component={BW} />
            
        </Switch>
        </BrowserRouter>
      </div>
      </React.Fragment>
    );
  }
}
export default App;
