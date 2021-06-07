import { useEffect, useState } from "react";
import "./App.css";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";

import { Route, BrowserRouter } from "react-router-dom";
import SignInAndSignUp from "./pages/SignIn-SignUp/SignIn-SignUp";
import { auth, createUserProfileDocument } from "./firebase";

const Hats = () => {
    return <div>Hats</div>;
};

function App() {
    const [user, setUser] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            const userRef = await createUserProfileDocument(user);

            userRef?.onSnapshot((snapshot) => {
                setUser({
                    id: snapshot.id,
                    ...snapshot.data(),
                });
            });
        });

        return () => {
            unsubscribe();
        };
    }, []);

    console.log(user);
    return (
        <div>
            <BrowserRouter>
                <Header currentUser={user} />
                <Route exact path="/" component={Home} />
                <Route path="/shop" component={Shop} />
                <Route path="/hats" component={Hats} />
                <Route path="/signin" component={SignInAndSignUp} />
            </BrowserRouter>
        </div>
    );
}

export default App;
