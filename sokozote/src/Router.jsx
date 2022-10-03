import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
