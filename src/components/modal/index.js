import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Modal} from 'antd'



class ModalComponent extends Component{
	constructor(props){
		super(props)
	}

	async handleOk(){
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
				{...this.props} 
				onOk = {::this.handleOk}
				onCancel = {::this.handleCancel}
			/>
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