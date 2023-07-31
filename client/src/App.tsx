import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import * as Pages from '@pages'

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="*" element={<Pages.NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

