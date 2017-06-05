```javascript
import React,{Component} from 'react'
import { Icon  } from 'xr-component'

export default class Example1 extends Component {
	render() {
		return (
			<div>
				<Icon type='github' style={{fontSize: 16, color: '#08c', marginRight:20}} />
				<Icon type='down' style={{fontSize: 16,marginRight:20}}/>
				<Icon type='up' style={{fontSize: 16, color: '#08c', marginRight:20}}/>
				<Icon type='left' style={{fontSize: 16,marginRight:20}}/>
				<Icon type='right' style={{fontSize: 16, color: '#08c', marginRight:20}}/>
			</div>
		)
	}
}
```