import React,{Component} from 'react'
import { Button, Icon } from 'xr-component'
const ButtonGroup = Button.Group;

export default class Example2 extends Component {
	render(){
		let style = {marginRight:10}
		return (
			 <div>
			    <h4>Basic</h4>
			    <ButtonGroup style={style}>
			      <Button>Cancel</Button>
			      <Button type="normal">OK</Button>
			    </ButtonGroup>

			    <ButtonGroup style={style}>
			      <Button disabled>L</Button>
			      <Button disabled>M</Button>
			      <Button disabled>R</Button>
			    </ButtonGroup>

			    <ButtonGroup>
			      <Button type="normal">L</Button>
			      <Button>M</Button>
			      <Button>M</Button>
			      <Button type="dashed">R</Button>
			    </ButtonGroup>

			    <h4>With Icon</h4>
			    <ButtonGroup style={style}>
			      <Button type="normal">
			        <Icon type="left" />Go back
			      </Button>
			      <Button type="normal">
			        Go forward<Icon type="right" />
			      </Button>
			    </ButtonGroup>
			    <ButtonGroup>
			      <Button type="normal" icon="cloud" />
			      <Button type="normal" icon="cloud-download" />
			    </ButtonGroup>
			  </div>
		)
	}
}