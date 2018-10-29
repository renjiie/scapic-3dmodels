import React, { Component } from "react";
import Delete from '../UserDelete/UserDelete';
import UpdatePage from '../UpdatePage/UpdatePage';
import firebase from "firebase";

import 'tachyons';




class UserProfile extends Component {
onUpdate=(user)=>{
	
	this.props.loadUser(user)
};
deleteAccount=(uid)=>{
	
	 if (window.confirm('Are you sure you wish to delete your Account?')) {
            firebase.auth().onAuthStateChanged(user =>{
				  if (user) {
				   firebase.auth().signOut()
				  } 
				  else {
				   		fetch('https://scapic-models.herokuapp.com/deleteuser',{
							method:'delete',
							headers: {'Content-Type' : 'application/json'},
							body:JSON.stringify({
								'id':uid
							})
						})
						.then(response=>response.json())
						.then(user=>{
							if(user.id){
								this.props.OnRouteChange('signout')
							}
							else{
								alert('Cannot delete the account')
							}
						})
				  }
				});  


		
}}


 render() {
 	const{id,name,email} = this.props.user
  	return (<div >
  		<div style={{display:'flex'}}>
  		<p  data-toggle="modal" data-target="#userProfile"style={{display :'flex' , justifyContent : 'flex-start'}}
     className=' f3 link dim black underline pa2 pointer '> Profile</p>

     <center className='ml-auto-l mr-auto-l pa3 ph4 tc red f3'>
			{`${name}, welcome to our 3d models Shop`}
		</center>
		</div>
     <div  className="modal fade" id="userProfile" tabIndex="-1" role="dialog" 
			     aria-labelledby="myModalLabel" aria-hidden="true">
			    <div className="modal-dialog">
			        <div className="modal-content">
			           
			            <div  className="tc modal-header">
			                <h4 className="modal-title" id="myModalLabel">
			                    Review Your Profile

			                </h4>
			            </div>
			            <div className="modal-body">
			           
			             <form >
			                
			                	 
			                <div >
			      				<p>Your id : <span className="red">{id}</span></p>
			      				<p>Your name : <span className="red">{name}</span></p>
			      				<p>Your email :<span className="red">{email}</span></p>

			              	 </div>

			              	 <Delete style={{display :'flex' , justifyContent : 'flex-end'}} className= 'pa2 ' deleteAccount={()=>this.deleteAccount(id)}/> 
			              	 </form>
			              	<div>
			              	  <UpdatePage style={{display :'flex' , justifyContent : 'flex-start'}} 
			              	 			              	  className= 'pa2'  uid= {id} userName= {name} userEmail = {email} 
			              	 			              	  onUpdate={this.onUpdate} />
							  	</div>
								
								

			              	  
							     
							  
			              	 
			              	 
			              

			                 <div className="modal-footer">
			                  
			                   <button type="button" className="btn btn-default"
			                        data-dismiss="modal">
			                            Close
			                </button>
			                 </div>
			            </div>
			            
			                
			           
			        </div>
			    </div>
			</div>
			</div>
  		)
}
};

export default UserProfile