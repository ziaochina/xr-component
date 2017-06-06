import React from 'react'
import {Button} from 'antd'
import classNames from 'classnames'
import ButtonGroupComponent from './buttonGroup'

function ButtonComponent(props){
	let className = classNames({
		'xr-button' :true,
		[props.className] : !!props.className
	})
	return <Button {...props} className={className} />
}

ButtonComponent.Group = ButtonGroupComponent

export default ButtonComponent
