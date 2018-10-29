import React, { Component } from "react"
import "./App.css";
import logo from './components/Logo/scapic.png';
import DModels from './components/DModels/DModels';
import Navigation from './components/Navigation/Navigation';
import 'tachyons';
//import axios from 'axios';
import Scroll from './components/Scroll/Scroll'
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import SocialLogin from './components/SocialLogin/SocialLogin';
import UserProfile from './components/UserProfile/UserProfile';
import jsonData from './scapic.json';



class App extends Component {
  state={
      categories:[],
      route:'signin',
      isSignedIn:false,
      user:{
        id: '',
        name: '',
        email: '',
        joined : ''
 } 

       
};
 
  
  componentDidMount() { 
    this.setState({categories:jsonData.categories});
    };
   //    componentDidMount() { 
   // axios.get(`https://s3.ap-south-1.amazonaws.com/scapic-others/json/models.json`,{
   //    method:'get',
   //    headers: {"Access-control-Allow-Origin":"http://localhost:3001/",'Content-Type' : 'application/json'},
   // })
   //    .then(response => 
   //      {this.setState({categories:response.data.categories});
   //       })
  
   //  };
   
  OnRouteChange =(route) =>{
    if (route==='signout'){
      this.setState({route:'signin',isSignedIn:false,user:{
        id: '',
        name: '',
        email: '',
        joined : ''
 } })
    }
    else if(route==='home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route:route})
  };
  
  // LoginHandler =(login)=>{
  //   this.setState({login:login})
  // };

  loadUser =(data) =>{
    this.setState({user:{
      id: data.id,
      name: data.name,
      email: data.email,
      joined : data.joined
    }})
  };

  render() {
    const {categories, route, isSignedIn,user} = this.state;
    //   if (isLoading) {
    //     return <div>Loading...</div>
    // }
    return (  
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 >3D models </h1>
        <Navigation isSignedIn={isSignedIn}  OnRouteChange={this.OnRouteChange}/>
        {route==='home' ? 
          <div>
          <UserProfile loadUser={this.loadUser} OnRouteChange={this.OnRouteChange} user={user}/>
          
            <Scroll>
              <DModels dmodels={categories}/>
            </Scroll>
          </div> 
          :(
            route === 'signin'
            ?(<div>
              <SignIn  loadUser={this.loadUser} OnRouteChange={this.OnRouteChange}/>
               <SocialLogin  loadUser={this.loadUser} OnRouteChange={this.OnRouteChange}/>
            </div>
              )
            :(<div>
              <Register loadUser={this.loadUser} OnRouteChange={this.OnRouteChange}/>
            </div>
          )
          )
        }  
       
         <footer className="pv4 ph3 ph5-m ph6-l red">
            <small className="f6 db tc">© 2018 <b className="ttu">Scapic Inc</b>., All Rights Reserved</small>
            <div className="tc mt3">
               {`Made by Renjith`}
            </div>
        </footer>  
      </div>
    );
  }
}

export default App;






 


  

  
  
 
  
