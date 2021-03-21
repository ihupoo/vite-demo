import React, { useState, useEffect } from 'react'


export function Api(props) {
console.log('JSON.stringify(props) :>> ', props);


  return (
    <div >
{props.children.map(x => {

	
	return <div key={x.props.identifier}>{x.props.description}; {x.props.identifier}; {x.props.type}; {x.props.required}</div>
})}

    </div>
  )
}
