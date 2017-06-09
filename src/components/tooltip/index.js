import React from 'react'
import {Tooltip} from 'antd'
import classNames from 'classnames'

export default function TooltipfirmComponent(props){
	let className = classNames({
		'xr-tooltip' :true,
		[props.className] : !!props.className
	})
	return <Tooltip {...props} className={className} />
}
