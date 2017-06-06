import React,{Component} from 'react'
import { Layout  } from 'xr-component'

export default class Example1 extends Component {
	render() {
		return (
			<Layout width='100%' height='200'>
				<Layout ></Layout>
				<Layout ></Layout>
				<Layout ></Layout>
			</Layout>
		)
	}
}