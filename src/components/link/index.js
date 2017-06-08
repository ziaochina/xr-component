import React from 'react'
import classNames from 'classnames'
import omit from 'omit.js'

export default function Link(props){
	let className = classNames({
		'xr-link' :true,
		[props.className] : !!props.className
	})
	return <a {...props} className={className} />
}