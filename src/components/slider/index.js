import React from 'react'
import {Slider} from 'antd'
import classNames from 'classnames'

export default function SliderComponent(props){
	let className = classNames({
		'xr-slider' :true,
		[props.className] : !!props.className
	})
	return <Slider {...props} className={className} />
}
