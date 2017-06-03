import React,{Component} from 'react'
import aboutMd from './md/about.md'

export default class About extends Component{
	render(){
		return (
			<div className='markdown-body' dangerouslySetInnerHTML={{__html: aboutMd}}>
			</div>
		)
	}
}