import React from 'react'
import {Menu} from 'antd'

function MenuComponent(props){
	return <Menu {...props} />
}

MenuComponent.Divider = Menu.Divider
MenuComponent.Item = Menu.Item
MenuComponent.SubMenu = Menu.SubMenu
MenuComponent.ItemGroup = Menu.ItemGroup

export default MenuComponent
