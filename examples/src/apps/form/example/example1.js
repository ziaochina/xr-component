import React,{Component} from 'react'
import { Form,Input } from 'xr-component'
const FormItem = Form.Item

export default class Example1 extends Component {
	render() {
		return (
			<Form>
				<FormItem label="用户名">
					<Input />
				</FormItem>
				<FormItem label="密码">
					<Input type='password'/>
				</FormItem>
		  	</Form>
		)
	}
}