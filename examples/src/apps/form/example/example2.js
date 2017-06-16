import React,{Component} from 'react'
import { Form,Input } from 'xr-component'
const FormItem = Form.Item

export default class Example1 extends Component {
	render() {
		return (
			<Form position='horizontal'>
				<FormItem label="用户名" labelCol={{style:{width:100}}}>
					<Input />
				</FormItem>
				<FormItem label="密码" labelCol={{style:{width:100}}}>
					<Input type='password'/>
				</FormItem>
		  	</Form>
		)
	}
}