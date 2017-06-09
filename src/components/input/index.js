import React from 'react'
import {Input} from 'antd'
import classNames from 'classnames'

function InputComponent(props){
	let className = classNames({
		'xr-input' :true,
		[props.className] : !!props.className
	})
	return <Input {...props} className={className} />
}

InputComponent.Search = Input.Search
InputComponent.Group = Input.Group

export default InputComponent

