import React,{Component} from 'react'
import { Select,Button  } from 'xr-component'

const Option = Select.Option

const children = []
for (let i = 10; i < 20; i++) {
  	children.push(<Option key={i.toString(36) + i} >{i.toString(36) + i}</Option>)
}


export default class Example1 extends Component {

	handleChange(value){
		console.log(`selected ${value}`);
	}

	render() {
		return (
			<div>
		 		<Select 
		 		 style={{ width: 120 }} 
		 		 onChange={this.handleChange}
		 		 dropdownFooter={<Button style={{width:"100%"}}>新增</Button> }
		 		 enableHideDropdownByClick={true}>
			     {children}
			    </Select>
		  	</div>
		)
	}
}