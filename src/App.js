import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={
                        <Header />
                    }/>
                    <Route exact path="/checkout" element={
                        <Header />
                    }/>
                </Routes>
                <Routes>
                    <Route path="/login" element={
                        <Login />
                    }/>
                    <Route path="/" element={
                        <Home />
                    }/>
                    <Route exact path="/checkout" element={
                        <Checkout />
                    }/>
                </Routes>

            </div>
        </Router>

);
}

export default App;
