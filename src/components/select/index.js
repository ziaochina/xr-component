import React from 'react'
import {Select} from 'ziaochina-rc-select'
import classNames from 'classnames'

function SelectComponent(props){
	let className = classNames({
		'xr-select' :true,
		[props.className] : !!props.className
	})
	return <Select {...props} className={className} />
}

SelectComponent.Option = Select.Option
SelectComponent.OptGroup = Select.OptGroup

export default SelectComponent
