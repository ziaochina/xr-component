import React from 'react'
import {Card} from 'antd'
import classNames from 'classnames'

export default function CardComponent(props){
	let className = classNames({
		'xr-card' :true,
		[props.className] : !!props.className
	})
	return <Card {...props} className={className} />
}
