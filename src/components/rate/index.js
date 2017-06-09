import React from 'react'
import {Rate} from 'antd'
import classNames from 'classnames'

export default function RateComponent(props){
	let className = classNames({
		'xr-rate' :true,
		[props.className] : !!props.className
	})
	return <Rate {...props} className={className} />
}
