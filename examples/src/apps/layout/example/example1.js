import React,{Component} from 'react'
import { Layout  } from 'xr-component'

export default class Example1 extends Component {
	render() {
		debugger
		return (
			<Layout>
				<Layout style={{height:52}}></Layout>
				<Layout></Layout>
				<Layout style={{height:52}}></Layout>
			</Layout>
		)
	}
}