import React,{Component} from 'react'
import { Icon  } from 'xr-component'

export default class Example1 extends Component {
	render() {
		let style = {fontSize: 16, marginRight:20}
		return (
			<div>
				<Icon type='github' style={style} />
				<Icon type='down' visible={false} style={style} />
				<Icon type='up'  disabled style={style} />
				<Icon type='left' showStyle='normal' style={style}/>
				<Icon type='right' showStyle='primary' style={style}/>
				<Icon type='customer' fontFamily='xricon' showStyle='primary' style={style}/>
			</div>
		)
	}
}