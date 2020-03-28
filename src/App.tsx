import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import mapRoutes from "./helpers/mapRoutes";
import routes from "./routes";
import Loading from "./pages/Loading";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Switch>{mapRoutes(routes)}</Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
