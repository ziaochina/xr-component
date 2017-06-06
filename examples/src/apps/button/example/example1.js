import React,{Component} from 'react'
import { Button } from 'xr-component'

export default class Example1 extends Component {
	render(){
		return (
			<div>
			    <Button type="primary">Primary</Button>
			    <Button>Default</Button>
			    <Button type="dashed">Dashed</Button>
			    <Button type="danger">Danger</Button>
		  	</div>
		)
	}
}