import React from 'react';

const Scroll =(props) => {
	return (<div style={{overflowX: 'scroll',overflowY: 'hidden', border : '5px solid green', 
		height : '40vh',display:'inline-block',
		width : '100vw',whiteSpace:'nowrap'}}> 
		{props.children}
		</div>)
}

export default Scroll