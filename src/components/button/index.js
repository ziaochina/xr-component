import React from 'react'
import {Button} from 'antd'
import classNames from 'classnames'
import omit from 'omit.js'
import ButtonGroupComponent from './buttonGroup'
import Icon from '../icon'

function ButtonComponent(props){
	let className = classNames({
		'xr-btn' :true,
		[`xr-btn-${props.type}`]: !!props.type,
		[props.className] : !!props.className
	})

    const iconNode = props.icon ? <Icon type={props.icon} /> : null

	return <Button {...omit(props, ['icon'])} className={className}>{iconNode}</Button>
}

ButtonComponent.Group = ButtonGroupComponent

export default ButtonComponent
