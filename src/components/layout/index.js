import React, {Component} from 'react'
import classNames from 'classnames'

export default function LayoutComponent(props){
    const {  className, style, width, 
	    	height, direction, justifyContent, 
	    	alignItems, ...others } = props

    const className = classNames( {
      	'xr-layout': true,
      	[className] : !!className
    })

     style = style || {}

    if(width){
    	style.flex = `0 0 ${width}px`
    	style.width = `${width}px`
    }

    if(height){
    	style.flex = `0 0 ${height}px`
    	style.height = `${height}px`
    }

    if(direction){
    	style.flexDirection = direction
    }

    style.justifyContent = justifyContent 

    if(alignItems){
    	style.alignItems = alignItems
    }


   	return (
      	<div {...others} className={className} style={style}></div>
    )

}
