import React from 'react'
import {Button} from 'antd'
import classNames from 'classnames'
import ButtonGroupComponent from './buttonGroup'

function ButtonComponent(props){
	let className = classNames({
		'xr-btn' :true,
		[`xr-btn-${props.type}`]: !!props.type,
		[props.className] : !!props.className
	})
	return <Button {...props} className={className} />
}

ButtonComponent.Group = ButtonGroupComponent

export default ButtonComponent
