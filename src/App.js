import { useEffect } from "react";
import "./App.css";

import Home from "./pages/Home/Home.component";
import Shop from "./pages/Shop/Shop.component";
import Checkout from "./pages/Checkout/Checkout.component";
import SignInAndSignUp from "./pages/SignIn-SignUp/SignIn-SignUp.component";
import Header from "./components/Header/Header.component";

import {
  auth,
  createUserProfileDocument,
} from "./firebase";

import { Route, BrowserRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { FETCHUSER } from "./redux/reducers/userReducers";
import { getCollections } from "./redux/reducers/shopReducers";

function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  console.log(state);

  useEffect(() => {
    const unsubscribe = auth?.onAuthStateChanged(async (user) => {
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

  useEffect(() => {
    getCollections()(dispatch);

    // Promise Pattern

    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/dresssed-to-kill/databases/(default)/documents/collections"
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data.documents));
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInAndSignUp} />
        <Route path="/checkout" component={Checkout} />
      </BrowserRouter>
    </div>
  );
}

export default App;
