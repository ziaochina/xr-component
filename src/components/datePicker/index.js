import React from 'react'
import {DatePicker} from 'antd'
import classNames from 'classnames'

function DatePickerComponent(props){
	let className = classNames({
		'xr-datepicker' :true,
		[props.className] : !!props.className
	})
	return <DatePicker {...props} className={className} />
}

DatePickerComponent.MonthPicker = DatePicker.MonthPicker
DatePickerComponent.RangePicker = DatePicker.RangePicker

export default DatePicker