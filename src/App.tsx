import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Theme from "./theme";
import Loading from "./components/loaders/radarLoader";
import Home from "./pages/home";


function App() {
  return (
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
  );
}

export default App;
