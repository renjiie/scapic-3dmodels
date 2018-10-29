import React from 'react';


const userDelete =(props) =>{
	return (
	<div>
    <button onClick={props.deleteAccount} className='btn btn-danger'>Delete account</button>
	</div>
	)
		
}

export default userDelete