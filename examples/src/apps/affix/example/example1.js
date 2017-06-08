import React,{Component} from 'react'
import { Affix, Button } from 'xr-component'

export default class Example1 extends Component {


	render() {
		let a = Affix
	let b = Button
	debugger
		return (
			<div>
		 		<Affix>
			      <Button type="primary">Affix top</Button>
			    </Affix>
			    <br />
			    <br />
			    <Affix offsetBottom={0}>
			      <Button type="primary">Affix bottom</Button>
			    </Affix>
		  	</div>
		)
	}
}