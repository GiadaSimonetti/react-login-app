import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Success from "./Success";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          <Route path="/success" component={Success} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
