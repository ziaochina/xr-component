import React from 'react'
import {Icon} from 'antd'
import classNames from 'classnames'

export default function IconComponent(props){
	let className = classNames({
		[props.fontFamily] : !!props.fontFamily,
		[`${props.fontFamily}-${props.type}`] : !!props.fontFamily,
		[props.className] : !!props.className
		
	})
	return <Icon {...props} className={className} />
}
