import React,{Component} from 'react'
import aboutMd from './md/about.md'
import {Button} from 'antd'

export default class About extends Component{
	render(){
		return (
			<div>
			<Button> eee</Button>
			<div className='markdown-body' dangerouslySetInnerHTML={{__html: aboutMd}}>
			</div>
			</div>
		)
	}
}