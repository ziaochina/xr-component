import React,{Component} from 'react'
import {Icon, Card, Collapse} from 'xr-component'
import Markdown from '../markdown'

const Panel = Collapse.Panel

export default class Example extends Component {

	render(){

		return (
			<Card title={this.props.title} style={{overflow:'visible'}} className='example-template'>
				<Collapse bordered={false} defaultActiveKey={['1']} style={{overflow:'visible'}}>
					<Panel header={<a>效果</a>} key="1" style={{overflow:'visible'}}>
						<div className='example-content'>{this.props.content}</div>
					</Panel>
				 	<Panel header={<a>代码</a>} key="2">
				 		{Markdown({content:this.props.doc})}
    				</Panel>
    			</Collapse>
		
			</Card>
		)
	}
}