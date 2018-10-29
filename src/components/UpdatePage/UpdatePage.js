import React , { Component } from 'react';
import 'tachyons';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
class UpdatePage extends Component {
	state={
		
		email: '',
		name:'',
		password:'',
		updation:false
	};
pageUpdate=()=>{
	this.setState({updation : true})
};

onEmailChange =(event)=>{
		this.setState({email:event.target.value})
	};
onPasswordChange =(event)=>{
		this.setState({password:event.target.value})
	};
onNameChange =(event)=>{
		this.setState({name:event.target.value})
	};

onSubmitUpdate=()=>{
	 if (window.confirm('Are you sure you wish to UPDATE your Account?')) {
              
	 	if(!(this.state.name&&this.state.email&&this.state.password)){
		fetch('https://fierce-spire-88497.herokuapp.com/update',{
			method:'put',
			headers: {'Content-Type' : 'application/json'},
			body:JSON.stringify({
				'id': this.props.uid,
				'name':this.state.name,
				'email':this.state.email,
				'password':this.state.password
			})
		})
		.then(response=>response.json())
		.then(user=>{
			if(user.name||user.email){
				
				this.props.onUpdate(user)
				this.setState({updation : false})

				
			}
			else{
				alert('Cannot update the user..')
			}
		})
	}else{
		alert('Please edit atleast one field to update')
	}	
}}
	render(){
		const {id,email,name,updation} = this.state
		const{uid,userName,userEmail}= this.props
		return (
			<div>
			 <button onClick={this.pageUpdate} className='btn btn-warning'>Edit Account</button>
							  	
						

		    { this.state.updation ? (
		     	<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
					<main className="pa4 black-80">
				  <div className="measure ">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">Update Your Profle</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black  w-100" 
				        type="text" 
				        name="name"  
				        id="name"
				        placeholder={userName}
				        onChange ={this.onNameChange}/>
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black  w-100" 
				        type="email" 
				        name="email-address"  
				        id="email-address"
				        placeholder={userEmail}
				        onChange ={this.onEmailChange}/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black  w-100" 
				        type="password" 
				        name="password"  
				        id="password"
				        onChange ={this.onPasswordChange}/>
				      </div>
				      
				    </fieldset>
				    <div className="">
				      <input  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				       onClick={()=>this.onSubmitUpdate()}
				       type="submit"
				       value="UPDATE ACCOUNT"/>
				    </div>
				    
				  </div>
				</main>
				</article>
		     	):''}
			</div>
	)
	};
	
		
}

export default UpdatePage