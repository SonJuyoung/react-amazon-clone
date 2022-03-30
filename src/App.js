import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {useEffect} from "react";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js/pure";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
    "pk_test_51KiikgKNjdKxMF9bwWa8T2OdIA6ePSX7cEERqIwmhJYFnsef1qAK63Lnj3vXIEHSvSKKkn0C54gro4svhOxyfFLR004YQ7xniS"
)

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log(authUser);
            if(authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser
                })
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null
                })
            }
        })
    }, [])

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={
                        <Header />
                    }/>
                    <Route path="/payment" element={
                        <Header />
                    }/>
                    <Route exact path="/checkout" element={
                        <Header />
                    }/>
                    <Route path="/orders" element={<Header />}/>
                </Routes>
                <Routes>
                    <Route path="/login" element={
                        <Login />
                    }/>
                    <Route path="/" element={
                        <Home />
                    }/>
                    <Route path="/orders" element={
                        <Orders />
                    }/>
                    <Route exact path="/checkout" element={
                        <Checkout />
                    }/>
                    <Route exact path="/payment" element={
                        <Elements stripe={promise}>
                        <Payment />
                        </Elements>
                    }/>
                </Routes>
            </div>
        </Router>

);
}

export default App;
