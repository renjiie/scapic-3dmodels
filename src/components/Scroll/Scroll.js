import React from 'react';

const Scroll =(props) => {
	return (<div style={{overflowX: 'scroll',overflowY: 'scroll', border : '5px solid black', 
		height : '70vh',display:'inline-block',
		width : '100vw',whiteSpace:'nowrap'}}> 
		{props.children}
		</div>)
}

export default Scroll