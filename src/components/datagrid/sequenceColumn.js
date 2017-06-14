import React from 'react'
import { Table, Column, Cell } from 'fixed-data-table'
import Icon from '../icon'

export default function SequenceColumn(props){
	let {
		enableSum, //启用合计
		enableLink, //启用链接
		startSequence, //开始序号值
		enableAddDelrow, //启用增删行功能
		onAddrow, //增行事件
		onDelrow, //删行事件
		onClick, //点击事件
	} = props



	let getContent = (ps) => {

		//序号列显示内容，如果有开始序号那么加上
		let text = startSequence ? (startSequence + ps.rowIndex + 1) + '' : (ps.rowIndex + 1) + '' 

		//启用链接，会响应click事件
		if (enableLink){
			return (
				<Cell onClick={()=>onClick(ps)}>
					{enableAddDelrow?<Icon type="plus" className='add-row' onClick={onAddrow(ps)} />:null}
					<a>
						{text}
					</a>
					{enableAddDelrow?<Icon type="close" className='remove-row' onClick={onDelrow(ps)}/>:null}
				</Cell>
			)
		}

		return <Cell onClick={()=>onClick(ps)}>
			{enableAddDelrow?<Icon type="plus" className='add-row' onClick={onAddrow(ps)}/>:null}
				<a style={{color:"#444444", cursor:"default"}}>
					{text}
				</a>
			{enableAddDelrow?<Icon type="close" className='remove-row' onClick={onDelrow(ps)}/>:null}
		</Cell>
	}



	return (
		<Column
			key="_sequence"
			width = {42}
			fixed = {true}
			cell = { ps => getContent(ps)}
			header = {
				<Cell>序号</Cell>
			}

			footer={enableSum ? (
				<Cell style={{ fontWeight: 'bold' }}>合计</Cell>) : undefined
			}
		/>
	)


}

