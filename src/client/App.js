import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./screens/Main";
import TokenDisplay from "./screens/TokenDisplay";

export default function App() {
  return (
    <BrowserRouter>
      <div className="RouterMain">
        <Route exact path="/" component={Main} />
        <Route path="/display" component={TokenDisplay} />
      </div>
    </BrowserRouter>
  );
}
