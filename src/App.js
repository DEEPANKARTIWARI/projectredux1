import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import store from "./store";
import MyAccount from "./components/MyAccount";
import LandingPage from "./components/LandingPage";
import Landing2 from "./components/Landing2";
function App() {
  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<LoginPage />} />

            <Route path="/landingPage" element={<Landing2 />} />
            <Route path="/myaccount" element={<MyAccount />} />
          </Routes>
        </Provider>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
