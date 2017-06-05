import React from 'react'
import {Collapse} from 'antd'

function CollapseComponent(props){
	return <Collapse {...props} className='xr-collapse' />
}

CollapseComponent.Panel = Collapse.Panel

export default CollapseComponent
