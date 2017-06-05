import React, {Component} from 'react'
import classNames from 'classnames'

export default function LayoutComponent(props){
    const className = classNames( {
      	'xr-layout': true,
      	[props.className] : !!props.className
    })

   	return (
      	<div {...props} className={className}></div>
    )

}
