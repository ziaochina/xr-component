import React from 'react'
import {Select} from 'ziaochina-rc-select'
import classNames from 'classnames'

export default function AffixComponent(props){
	let className = classNames({
		'xr-select' :true,
		[props.className] : !!props.className
	})
	return <Select {...props} className={className} />
}
