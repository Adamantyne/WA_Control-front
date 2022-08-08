import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../../assets/css/reset.css";
import "../../assets/css/index.css";
import "../../assets/css/query.css";

import { Provider } from "../../hooks/UserContext";
import SignUp from "../routes/SignUp";
import SignIn from "../routes/SignIn";
import Home from "../routes/Home";
import Customers from "../routes/Customers";

function App() {
  return (
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/customers" element={<Customers />} />
          </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
