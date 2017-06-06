import React from 'react'
import {Icon} from 'antd'
import classNames from 'classnames'

export default function IconComponent(props){
	if(props.visible === false)
		return null

	let showStyle = props.showStyle || 'default'

	if(props.disabled){
		showStyle = 'disabled'
	}

	let className = classNames({
		[props.fontFamily] : !!props.fontFamily,
		[`${props.fontFamily}-${props.type}`] : !!props.fontFamily,
		[`xricon--${showStyle}`] : !!showStyle,
		[props.className] : !!props.className
	})
	
	return <Icon {...props} className={className} />
}
