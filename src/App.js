// import "./App.css";
// import Login from "./Login";

// const App = () => {
//   return (
//     <div className="App">
//       <Login />
//     </div>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Result from "./Result";
import Header from "./components/Header";
import Login from "../src/Login";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        <Login />
      </div>
      <Router>
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          <Route path="/result" component={Result} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
