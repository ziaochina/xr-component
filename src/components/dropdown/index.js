import React from 'react'
import {Dropdown} from 'antd'
import classNames from 'classnames'


function DropdownComponent(props){
	let className = classNames({
		'xr-dropdown' :true,
		[props.className] : !!props.className
	})
	return <Dropdown {...props} className={className} />
}

DropdownComponent.Button = Dropdown.Button

export default DropdownComponent