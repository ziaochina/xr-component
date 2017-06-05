import React from 'react'
import {Icon} from 'antd'
import classNames from 'classnames'

export default function IconComponent(props){
	let className = classNames({
		'xr-icon' :true,
		[props.className] : !!props.className
	})
	return <Icon {...props} className={className} />
}
