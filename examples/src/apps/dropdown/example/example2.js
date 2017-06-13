import React,{Component} from 'react'
import { Dropdown, Menu, Icon, Button  } from 'xr-component'

const ButtonGroup = Button.Group

const menu = (
  <Menu >
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3d menu item</Menu.Item>
  </Menu>
)

export default class Example2 extends Component {

	render() {
		let a = Dropdown
			debugger
		return (

			<div>
			 	<Dropdown.Button type="showy" overlay={menu}>
      				Dropdown
    			</Dropdown.Button>

    			<Dropdown overlay={menu}>
			      <Button type="showy" style={{ marginLeft: 8 }}>
			        Button <Icon type="down" />
			      </Button>
			    </Dropdown>
			</div>
			
		)
	}
}