```jsx
import React,{Component} from 'react'
import { Icon  } from 'xr-component'

export default class Example1 extends Component {
	render() {
		let style = {fontSize: 16, color: 'red', marginRight:20}
		return (
			<div>
				<Icon type='github' disabled style={style} />
				<Icon type='down' visible={false} style={style} />
				<Icon type='up' style={style} />
				<Icon type='left' showStyle='primary' style={style}/>
				<Icon type='customer' fontFamily='xricon' showStyle='primary' style={style}/>
			</div>
		)
	}
}
```