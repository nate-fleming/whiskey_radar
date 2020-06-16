import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "./components/loaders/radarLoader";
import Home from "./pages/home";
import MyBottles from './pages/my-bottles'


function App() {
  return (
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/my-bottles" component={MyBottles} />
        </Switch>
      </Suspense>
  );
}

export default App;
