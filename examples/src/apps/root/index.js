import React,{Component} from 'react'
import {AppLoader} from 'xr-app-loader'
import {Icon, Menu} from 'xr-component'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import './style.less'



export default class RootComponent extends Component{


    handleMenuClick(e){
    	this.props.setCurrentAppPath(`apps/${e.key}`)
    }

    handleGithubClick(){
    	window.open("https://github.com/ziaochina/xr-component/tree/master")
    }

	render(){
		let currentAppPath = this.props.payload.get('currentAppPath')
		return(
			<div className='app-root'>
				<div className='app-root-header'>
					<div className='app-root-header-left'> 
						<h1>xr-componnet</h1>
					</div>
					<div className='app-root-header-right'> 
						<Icon type='github' onClick={::this.handleGithubClick}/>
					</div>
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
		        	<Menu.Item key="layout">Layout 布局</Menu.Item>
		        	<Menu.Item key="icon">Icon 图标</Menu.Item>
		        	<Menu.Item key="button">Button 按钮</Menu.Item>
		        	<Menu.Item key="datePicker">DatePicker 日期</Menu.Item>
		        	<Menu.Item key="checkbox">Checkbox 多选框</Menu.Item>
		        	<Menu.Item key="radio">Radio 单选框</Menu.Item>
		        	<Menu.Item key="link">Link 链接</Menu.Item>
		        	<Menu.Item key="switch">Switch 开关</Menu.Item>
		        	<Menu.Item key="menu">Menu 菜单</Menu.Item>
		        	<Menu.Item key="card">Card 卡片</Menu.Item>
		        	<Menu.Item key="collapse">Collapse 折叠面板</Menu.Item>
		        	<Menu.Item key="tabs">Tabs 标签页</Menu.Item>
		            <Menu.Item key="tree">Tree 树</Menu.Item>
		            <Menu.Item key="treeSelect">TreeSelect 树选择框</Menu.Item>
		            <Menu.Item key="affix">Affix 固钉</Menu.Item>
		            <Menu.Item key="anchor">Anchor 瞄点</Menu.Item>
		            <Menu.Item key="backTop">BackTop 回到顶部</Menu.Item>
		            <Menu.Item key="breadcrumb">Breadcrumb 面包屑</Menu.Item>
		            <Menu.Item key="badge">Badge 徽标数</Menu.Item>
		            <Menu.Item key="input">Input 输入框</Menu.Item>
		            <Menu.Item key="inputNumber">InputNumber 数字输入框</Menu.Item>
		            <Menu.Item key="password">Password 密码框</Menu.Item>
		            <Menu.Item key="text">Text 文本</Menu.Item>
		            <Menu.Item key="select">Select 选择框</Menu.Item>
		         
		           
		        </SubMenu>
     		</Menu>
	    )
	}
}