import React,{Component} from 'react'
import { Select  } from 'xr-component'

const Option = Select.Option

export default class Example1 extends Component {

	handleChange(){
		
	}

	render() {
		return (
			<div>
		 		<Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
			      <Option value="jack">Jack</Option>
			      <Option value="lucy">Lucy</Option>
			      <Option value="disabled" disabled>Disabled</Option>
			      <Option value="Yiminghe">yiminghe</Option>
			    </Select>
		  	</div>
		)
	}
}