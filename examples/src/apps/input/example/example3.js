import React,{Component} from 'react'
import { Input  } from 'xr-component'

const Search = Input.Search

export default class Example1 extends Component {

	render() {
		return (
			<div>
		 		<Input placeholder="Basic usage" type='search' />
		  	</div>
		)
	}
}