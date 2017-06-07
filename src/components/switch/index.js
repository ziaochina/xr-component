import React from 'react'
import {Switch} from 'antd'
import classNames from 'classnames'

function SwitchComponent(props){
	let className = classNames({
		'xr-switch' :true,
		[props.className] : !!props.className
	})
	return <Switch {...props} className={className} />
}

export default SwitchComponent
