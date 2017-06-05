import React,{Component} from 'react'
import aboutMd from './md/about.md'
import {Button, Icon} from 'antd'

export default class About extends Component{
	render(){
		return (
			<div>
			<Button> eee</Button>
			<Icon type="github" />
			<div className='markdown-body' dangerouslySetInnerHTML={{__html: aboutMd}}>
			</div>
			</div>
		)
	}
}