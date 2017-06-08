import React from 'react'
import {TimePicker} from 'antd'
import classNames from 'classnames'

export default function TimePickerComponent(props){
	let className = classNames({
		'xr-time-picker' :true,
		[props.className] : !!props.className
	})
	return <TimePicker {...props} className={className} />
}
