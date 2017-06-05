import React,{Component} from 'react'
import { Layout  } from 'xr-component'

export default class Example1 extends Component {
	render() {
		return (
			<Layout style={{width:'100%', height:200}}>
				<Layout style={{height:52}}></Layout>
				<Layout style={{flex:'1 1 auto'}}></Layout>
				<Layout style={{height:52}}></Layout>
			</Layout>
		)
	}
}