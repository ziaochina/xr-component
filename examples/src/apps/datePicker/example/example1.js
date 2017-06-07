import React,{Component} from 'react'
import { DatePicker  } from 'xr-component'

const { MonthPicker, RangePicker } = DatePicker

export default class Example1 extends Component {
	render() {
		let style = {fontSize: 16, marginRight:20}
		return (
			<div>
		    <DatePicker onChange={onChange} />
		    <br />
		    <MonthPicker onChange={onChange} placeholder="Select month" />
		    <br />
		    <RangePicker onChange={onChange} />
		  </div>
		)
	}
}