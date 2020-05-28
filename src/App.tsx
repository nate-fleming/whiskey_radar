import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Theme from "./theme";
import Loading from "./components/loaders/loading";
import Home from "./pages/home";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Theme>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Theme>
    </Suspense>
  );
}

export default App;
