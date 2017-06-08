import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Modal} from 'antd'
import {fromJS} from 'immutable'


class ModalComponent extends Component{
	state = {
		data:fromJS({
		})
	}

	constructor(props){
		super(props)
		this.setOkListener = this.setOkListener.bind(this)
		this.setCancelListener = this.setCancelListener.bind(this)
	}

	setOkListener(cb){
		this.setState({data:this.state.data.set('okListener', cb)})		
	}

	setCancelListener(cb){
		this.setState({data:this.state.data.set('cancelListener', cb)})		
	}

	async handleOk(){
		let l = this.state.data.get('okListener'),
			ret 
		if( l ){
			ret = await l()
			if( ret === false){
				return
			}
		}
		this.props.onOk && this.props.onOk(ret)
	}

	handleCancel(){
		this.props.onCancel && this.props.onCancel()
	}

	render(){
		let {children , ...otherProps} = this.props

		return (
			<Modal 
				visible 
				{...otherProps} 
				onOk = {::this.handleOk}
				onCancel = {::this.handleCancel}>
				{React.cloneElement(children, {
					setOkListener:this.setOkListener, 
					setCancelListener:this.setCancelListener
				})}
 			</Modal>
 		)
	}
}

ModalComponent.newInstance = (props)=>{
	return {
	  	show(properties){
	  		const div = document.createElement('div')
	  		
	  		return new Promise((resolve, reject)=>{
  				let handleCancel = ()=>{
	  				ReactDOM.unmountComponentAtNode(div)
			        try{
			      	   document.body.removeChild(div)
			        }
			        catch(err){}
			        resolve(false)
	  			}

		  		let handleOk =(data) =>{
		  			ReactDOM.unmountComponentAtNode(div)
			        try{
			      	   document.body.removeChild(div)
			        }
			        catch(err){}
		  			resolve(data || true)
		  		}
		  		
	  			const props = properties || {}
	      		document.body.appendChild(div)
	  			
	  			ReactDOM.render(
	  				<ModalComponent
	  					visible
	  					maskClosable={false}
	  			 		{...props} 
	  					onCancel={handleCancel}
	  					onOk={handleOk} />
  				, div)

	  		})
	  	}
  	}
}

let m = window.__Modal

if(!m){
    m = ModalComponent.newInstance()
    window.__Modal = m
}

export default m