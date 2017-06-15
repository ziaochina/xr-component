import React from 'react'
import classNames from 'classnames'
import FormItem from './formItem'

function FormComponent(props){
	let className = classNames({
		'xr-form':true,
		'xr-form-horizontal':props.position =='horizontal',
		'xr-form-vertical': props.position =='vertical',
		[props.className]: !!props.className
	})

	return (
		<div 
			{...props}
			className = {className}
		/>
	)
}

FormComponent.Item = FormItem

export default FormComponent