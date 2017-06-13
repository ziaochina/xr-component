import React from 'react'
import { Table, Column, Cell } from 'fixed-data-table'
import {CheckBox} from 'xComponent'

export default function createSelectColumn(props) {
	let {
		key,
		width,
		cellGetter,
		headerGetter,
		footerGetter
	} = props
	
	return(
		<Column
			key={key}
			columnKey={key}
			fixed={true}
			width={width}
			cell={cellGetter}
			header={headerGetter}
			footer={footerGetter}
		/>
	)
}