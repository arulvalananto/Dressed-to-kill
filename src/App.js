import { useEffect } from "react";
import "./App.css";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";

import { Route, BrowserRouter } from "react-router-dom";
import SignInAndSignUp from "./pages/SignIn-SignUp/SignIn-SignUp";
import { auth, createUserProfileDocument } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { FETCHUSER } from "./redux/reducers/userReducers";
import Checkout from "./pages/Checkout/Checkout";

const Hats = () => {
    return <div>Hats</div>;
};

function App() {
    const dispatch = useDispatch();

    const state = useSelector((state) => state);
    console.log(state);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            const userRef = await createUserProfileDocument(user);

            userRef?.onSnapshot((snapshot) => {
                dispatch(
                    FETCHUSER({
                        id: snapshot.id,
                        email: snapshot.data().email,
                        displayName: snapshot.data().displayName,
                    })
                );
            });
        });

        return () => {
            unsubscribe();
        };
    }, [dispatch]);

    return (
        <div>
            <BrowserRouter>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/shop" component={Shop} />
                <Route path="/hats" component={Hats} />
                <Route path="/signin" component={SignInAndSignUp} />
                <Route path="/checkout" component={Checkout} />
            </BrowserRouter>
        </div>
    );
}

export default App;
