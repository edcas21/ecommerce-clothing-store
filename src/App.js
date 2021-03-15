import { React, Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import "./App.css";

import HomePage from "./components/pages/homepage/homepage.component";
import ShopPage from "./components/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from './components/pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";
import { setCurrentUser }  from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    // No more state, but because of mapDispatchToProps, it now has access setCurrentUser action that is used on userReducer
    // With a simple destructuring, we now have access to setCurrentUser without having to call this.props.setCurrentUser
    const { setCurrentUser } = this.props;
    
    // Open subscription between firebase and the application
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // If a user has been authenticated
      if (userAuth) {
        // Check if the use is in the db, if not then add the user
        const userRef = await createUserProfileDocument(userAuth);

        // userRef stores the users info, so populate currentUser in state with that info
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } 
    
      setCurrentUser(userAuth);

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path="/signin" render={ () => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  // Dispatches or extablishes access to the setCurrentUser Action within this class
  // This prop is passed to the class which containes the Action that will structure the payload for updating the userReducer state slice
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
