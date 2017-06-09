import React from 'react'
import {Pagination} from 'antd'
import classNames from 'classnames'

export default function PaginationComponent(props){
	let className = classNames({
		'xr-pagination' :true,
		[props.className] : !!props.className
	})
	return <Pagination {...props} className={className} />
}
