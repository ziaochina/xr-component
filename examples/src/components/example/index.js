import React,{Component} from 'react'
import {Icon, Card} from 'xr-component'

export default class Example extends Component {

	render(){
		return (
			<Card title={this.props.title}>
				<div className='example-content'>{this.props.content}</div>
				<div className='example-doc markdown-body' dangerouslySetInnerHTML={{__html: this.props.doc}}>
				</div>
			</Card>
		)
	}
}