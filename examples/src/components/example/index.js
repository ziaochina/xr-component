import React,{Component} from 'react'
import {Icon, Card, Collapse} from 'xr-component'
import Markdown from '../markdown'

const Panel = Collapse.Panel

export default class Example extends Component {

	render(){

		return (
			<Card title={this.props.title}>
				<Collapse bordered={false} defaultActiveKey={['1']}>
					<Panel header="效果" key="1">
						<div className='example-content'>{this.props.content}</div>
					</Panel>
				 	<Panel header="代码" key="2">
				 		{Markdown({content:this.props.doc})}
    				</Panel>
    			</Collapse>
		
			</Card>
		)
	}
}