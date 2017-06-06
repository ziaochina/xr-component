import React from 'react'
import classNames from 'classnames'
import {Button} from 'antd'

export default function ButtonGroupComponent(props){
	
	let className = classNames({
		'xr-button-group':true,
		[props.className] : !!props.className
	})

	return (
		<Button.Group 
			{...props}
			className = {className}   
		/>
	)
}