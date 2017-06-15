import React from 'react'
import {Form} from 'antd'
import classNames from 'classnames'

export default function FormItemComponent(props){
	let {
		className,
		...otherProps
	} = props

	return (
		<Form.Item
			{...otherProps}
			className={classNames('xr-form-item', className)}
		/>
	)
}