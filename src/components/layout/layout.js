import React, {Component} from 'react'
import classNames from 'classnames'

import './style.less'

export default function Layout(props){
	const { prefixCls, className, children, style, width, 
	    	height, direction, justifyContent, alignItems, ...others } = props

    const className = classNames( {
      	'xr-layout': true,
      	[className] : !!className
    })

    const style = {...style}

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
      	<div className={divCls} {...others} style={divStyle}>{children}</div>
    )

}

function generator(props) {
	return (ps)=>{ 
		return Basic({...ps,prefixCls:props.prefixCls})
	}
	/*return Basic=>{
	    return class Adapter extends Component {
	      
	      	render() {
		        const { prefixCls } = props
		        return <Basic prefixCls={prefixCls} {...this.props}/>
    		}
		}
	}*/
}

function Basic(props){
	 const { prefixCls, className, children, style, width, 
	    	height, direction, justifyContent, alignItems, ...others } = props


	    const divCls = classNames(prefixCls, {
	      	[`${prefixCls}-has-sider`]: hasSider,
	    },className)

	    const divStyle = {...style}

	    if(width){
	    	divStyle.flex = `0 0 ${width}px`
	    	divStyle.width = `${width}px`
	    }

	    if(height){
	    	divStyle.flex = `0 0 ${height}px`
	    	divStyle.height = `${height}px`
	    }

	    if(direction){
	    	divStyle.flexDirection = direction
	    }

	    divStyle.justifyContent = justifyContent 

	    if(alignItems){
	    	divStyle.alignItems = alignItems
	    }

	    return (
	      	<div className={divCls} {...others} style={divStyle}>{children}</div>
	    )
}


const Layout = generator({
  	prefixCls: 'x-layout',
})

const Header = generator({
  prefixCls: 'x-layout-header',
})

const Footer = generator({
  prefixCls: 'x-layout-footer',
})

const Content = generator({
  prefixCls: 'x-layout-content',
})

Layout.Header = Header
Layout.Footer = Footer
Layout.Content = Content


export default Layout