import React from 'react'
import {Timeline} from 'antd'
import classNames from 'classnames'

function TimelineComponent(props){
	let className = classNames({
		'xr-timeline' :true,
		[props.className] : !!props.className
	})
	return <Timeline {...props} className={className} />
}

TimelineComponent.Item =  Timeline.Item

export default TimelineComponent