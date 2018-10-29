import React from 'react';
import HorScroll from '../HorScroll/HorScroll';

const dModels =(props) =>{
	return (
		<div>
    
	{props.dmodels.map(({ name, models }) => (
  <React.Fragment key={Date()+Math.random()}>
    <div  className='tc red bg-black ttu -l br3 pa3 ma2 ' key={name}>{ name }</div>
    <HorScroll>{
      models.map(model => (
      	<img  className='tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5  w-20 h-20' key={model.mtl} alt ={model.mtl} src={ model.thumb }/>
        
      ))
    }</HorScroll>
  </React.Fragment>
))
	}</div>
	)
		
}

export default dModels