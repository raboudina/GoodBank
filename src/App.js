import "./App.css";
import AllData from "./Routes/alldata";
import NavBar from "./Routes/navbar";
import Deposit from "./Routes/deposit";
// import Login from "./Routes/login";
import CreateAccount from "./Routes/createaccount";
import Withdraw from "./Routes/withdraw";
import Home from "./Routes/home";
import { Route, Routes, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/CreateAccount/" element={<CreateAccount />} />
          {/* <Route path="/login/" element={<Login/>} /> */}
          <Route path="/deposit/" element={<Deposit />} />
          <Route path="/withdraw/" element={<Withdraw />} />
          <Route path="/alldata/" element={<AllData />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
