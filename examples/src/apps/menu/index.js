import React,{Component} from 'react'
import readmeMd from './md/readme.md'
import example1Md from './md/example1.md'

import {Icon, Card, Menu} from 'xr-component'

import Example from '../../components/example'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

export default class MenuDemo extends Component{
	render(){
		return (
			<div>
				{this.renderExample1()}
				{this.renderMarkdown(readmeMd)}
			</div>
		) 
	}

	renderExample1(){
		let menu = (
		 	<Menu
		        style={{ width: 240 }}
		        defaultSelectedKeys={['1']}
		        defaultOpenKeys={['sub1']}
		        mode="inline"
		      >
		        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
		          <MenuItemGroup key="g1" title="Item 1">
		            <Menu.Item key="1">Option 1</Menu.Item>
		            <Menu.Item key="2">Option 2</Menu.Item>
		          </MenuItemGroup>
		          <MenuItemGroup key="g2" title="Item 2">
		            <Menu.Item key="3">Option 3</Menu.Item>
		            <Menu.Item key="4">Option 4</Menu.Item>
		          </MenuItemGroup>
		        </SubMenu>
		        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
		          <Menu.Item key="5">Option 5</Menu.Item>
		          <Menu.Item key="6">Option 6</Menu.Item>
		          <SubMenu key="sub3" title="Submenu">
		            <Menu.Item key="7">Option 7</Menu.Item>
		            <Menu.Item key="8">Option 8</Menu.Item>
		          </SubMenu>
		        </SubMenu>
		        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
		          <Menu.Item key="9">Option 9</Menu.Item>
		          <Menu.Item key="10">Option 10</Menu.Item>
		          <Menu.Item key="11">Option 11</Menu.Item>
		          <Menu.Item key="12">Option 12</Menu.Item>
		        </SubMenu>
		      </Menu>)


		 return (
		 	<Example 
			 	title = '示例一：垂直菜单'
			 	content={menu}
			 	doc={example1Md} 
			/>
		 )
	}


	renderMarkdown(md){
		return (
			<div className='markdown-body' dangerouslySetInnerHTML={{__html: md}}>
			</div>
		)
	}
}