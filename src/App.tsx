import React, { Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { Provider, rootStore } from "./models/Root";
import mapRoutes from "./helpers/mapRoutes";
import routes from "./routes";
import Loading from "./pages/Loading";
import "./App.css";

function App() {
  return (
    <Provider value={rootStore}>
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Switch>{mapRoutes(routes)}</Switch>
        </Suspense>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
