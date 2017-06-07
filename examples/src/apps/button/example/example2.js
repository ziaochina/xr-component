import React,{Component} from 'react'
import { Button } from 'xr-component'

export default class Example2 extends Component {
	render(){
		let style = {marginRight:10}
		return (
			<div>
			    <Button icon='download' style={style}> download</Button>
			    <Button type="primary" icon='download' style={style}></Button>
			    <Button type="normal" style={style}>Normal</Button>
			    <Button type="dashed" style={style}>Dashed</Button>
			    <Button type="danger" style={style}>Danger</Button>
		  	</div>
		)
	}
}