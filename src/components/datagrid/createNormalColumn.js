import React from 'react'
import { Table, Column, Cell } from 'fixed-data-table'

export default function createNormalColumn(props) {
	let {
		key,
		flexGrow,
		fixed,
		width,
		cellGetter,
		headerGetter,
		footerGetter
	} = props
	
	return(
		<Column
			key={key}
			columnKey={key}
			flexGrow={flexGrow}
			fixed={fixed}
			width={width}
			cell={cellGetter}
			header={headerGetter}
			footer={footerGetter}
		/>
	)
}