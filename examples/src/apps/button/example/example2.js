import React,{Component} from 'react'
import { Button, Icon } from 'xr-component'

export default class Example2 extends Component {
	render(){
		let style = {marginRight:10}
		return (
			<div>
			    <Button icon='download' style={style}> download</Button>
			    <Button type="primary" icon='download' style={style}></Button>
			    <Button type="primary" shape="circle" icon='download' style={style} />
			    <Button type="primary" icon='download' disabled style={style}></Button>
			    <Button type="normal"  icon='menu-dropdown' iconFontFamily='xricon' iconShowStyle='primary' style={style} >sort</Button>
			    <Button>
        			more <Icon type="down" />
      			</Button>
		  	</div>
		)
	}
}