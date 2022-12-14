import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../../assets/css/reset.css";
import "../../assets/css/index.css";
import "../../assets/css/query.css";

import { Provider } from "../../hooks/UserContext";
import { ProviderWindow } from "../../hooks/windowContext";
import { ProviderSidebar } from "../../hooks/sidebarContext";
import { CalendarProvider } from "../../hooks/calendarContext";
import GlobalContainer from "../layout/MacroElements/GlobalContainer";
import SignUp from "../routes/SignUp";
import SignIn from "../routes/SignIn";
import Home from "../routes/Home";
import Customers from "../routes/Customers";
import Services from "../routes/Services";
import Calendar from "../routes/Calendar";
import Works from "../routes/Works";

function App() {
  return (
    <Provider>
      <ProviderWindow>
        <ProviderSidebar>
          <BrowserRouter>
            <CalendarProvider>
              <GlobalContainer>
                <Routes>
                  <Route path="/" element={<SignIn />} />
                  <Route path="/signUp" element={<SignUp />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/works" element={<Works />} />
                </Routes>
              </GlobalContainer>
            </CalendarProvider>
          </BrowserRouter>
        </ProviderSidebar>
      </ProviderWindow>
    </Provider>
  );
}

export default App;
