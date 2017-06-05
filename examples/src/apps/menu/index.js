import React,{Component} from 'react'
import md from './md/readme.md'
import {Button, Icon} from 'antd'

export default class MenuDemo extends Component{
	render(){
		return (
			<div>
			<Button> eee</Button>
			<Icon type="github" />
			<div className='markdown-body' dangerouslySetInnerHTML={{__html: md}}>
			</div>
			</div>
		)
	}
}