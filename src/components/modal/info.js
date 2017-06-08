import React, {Component} from 'react'
import {Modal} from 'antd'

function info(props){
	return new Promise((resolve, reject)=>{
		let handleOk = () =>{
			resolve(true)
		}

		let handleCancel = () => {
			resolve(false)
		}

		props.onOk = handleOk
		props.onCancel = handleCancel

		Modal.info(props)
	})
}