import React from 'react'
import {Carousel} from 'antd'
import classNames from 'classnames'

export default function CarouselComponent(props){
	let className = classNames({
		'xr-carousel' :true,
		[props.className] : !!props.className
	})
	return <Carousel {...props} className={className} />
}
