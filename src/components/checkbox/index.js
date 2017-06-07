import React from 'react'
import {Checkbox} from 'antd'
import classNames from 'classnames'

function CheckboxComponent(props){
	let className = classNames({
		'xr-checkbox' :true,
		[props.className] : !!props.className
	})
	return <Checkbox {...props} className={className} />
}

export default CheckboxComponent
