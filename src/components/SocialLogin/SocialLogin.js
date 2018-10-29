import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: "AIzaSyDKs2eeqmvtKx2Kz2Q7bdN5tLIP2rVwOgE",
  authDomain: "fir-auth-61858.firebaseapp.com"
})

class SocialLogin extends Component {
  state = { isSignedIn: false ,isLoading:true}

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
       ],
    callbacks: {
      signInSuccess: () => false
    }
  };

onSubmitSignin =()=>{
  
    fetch('https://scapic-models.herokuapp.com/social',{
      method:'post',
      headers: {'Content-Type' : 'application/json'},
      body:JSON.stringify({
        'email':firebase.auth().currentUser.email,
        'name':firebase.auth().currentUser.displayName,
      })
    })
    .then(response=>response.json())
    .then(user=>{
      if(user.id){
        
        this.props.loadUser(user)
        this.props.OnRouteChange('home')
      }
    })
    
  };



  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user ,isLoading:false })
      

      
    })
  };

  shouldComponentUpdate (nextProps,nextState){
    return this.state.isSignedIn!==nextState.isSignedIn
}
;
  render() {
  	 if(this.state.isLoading){
      const someVal = 'Loading...'
     };

    return (

      <div className="App">
        {this.state.isSignedIn ? 
          (
            this.onSubmitSignin()
           )
          : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default SocialLogin