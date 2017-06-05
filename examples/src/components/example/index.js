import React,{Component} from 'react'
import {Icon, Card, Collapse} from 'xr-component'

const Panel = Collapse.Panel

export default class Example extends Component {

	render(){
		let c = Collapse
debugger
		return (
			<Card title={this.props.title}>
				<div className='example-content'>{this.props.content}</div>

				<Collapse bordered={false}>
				 	<Panel header="code" key="1">
      					<div className='example-doc markdown-body' dangerouslySetInnerHTML={{__html: this.props.doc}}>
						</div>
    				</Panel>
    			</Collapse>
		
			</Card>
		)
	}
}