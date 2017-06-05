import React,{Component} from 'react'
import {AppLoader} from 'xr-app-loader'
import { Icon } from 'antd';
import {Menu} from 'xr-component'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import './style.less'



export default class RootComponent extends Component{


    handleMenuClick(e){
    	this.props.setCurrentAppPath(`apps/${e.key}`)
    }

   
	render(){
		let currentAppPath = this.props.payload.get('currentAppPath')
		return(
			<div className='app-root'>
				<div className='app-root-header'>
					<h1>xr-componnet</h1>
				</div>
				<div className='app-root-content'>
					<div className='app-root-content-left'>
						{this.getMenu()}
					</div>
					<div className='app-root-content-main'>
						{currentAppPath?<AppLoader path={currentAppPath} /> : null}
					</div>
				</div>
				
			</div>
		)
	}

	getMenu(){
		return (
			<Menu mode="inline" defaultOpenKeys={['components']} onClick={::this.handleMenuClick}>
			 	<Menu.Item key="about" >关于</Menu.Item>
			 	<Menu.Item key="start" >开始使用</Menu.Item>
		        <SubMenu key="components" title="组件">
		        	<Menu.Item key="Layout">Layout 布局</Menu.Item>
		            <Menu.Item key="button">Button 按钮</Menu.Item>
		            <Menu.Item key="input">Input 输入框</Menu.Item>
		            <Menu.Item key="inputNumber">InputNumber 数字输入框</Menu.Item>
		            <Menu.Item key="password">Password 密码框</Menu.Item>
		            <Menu.Item key="text">Text 文本</Menu.Item>
		            <Menu.Item key="select">Select 选择框</Menu.Item>
		            <Menu.Item key="link">Link 链接</Menu.Item>
		            <Menu.Item key="tabs">Tabs 页签</Menu.Item>
		            <Menu.Item key="tree">Tree 树</Menu.Item>
		            <Menu.Item key="menu">Menu 菜单</Menu.Item>

		        </SubMenu>
     		</Menu>
	    )
	}
}