import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/checkout" element={<><Header/><Checkout/></>}/>
          <Route path="/login" element={<><Header/><Login/></>}/>
          <Route path="/" element={<><Header/><Home/></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
