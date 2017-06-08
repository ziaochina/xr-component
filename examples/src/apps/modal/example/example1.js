import React,{Component} from 'react'
import { Modal, Button  } from 'xr-component'

export default class Example1 extends Component {

	showModal(){
		Modal.show( {
			title:"Basic Modal",
			children:(<div><p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p></div>)
		})
	}

	render() {
		return (
			<div>
		 		<Button onClick={::this.showModal}>Modal</Button>
		  	</div>
		)
	}
}