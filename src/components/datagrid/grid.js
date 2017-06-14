import React from 'react'
import ReactDOM from 'react-dom'
import {Table} from 'fixed-data-table'

export default function GridComponent(props){
	let {
		key,
		rowsCount,
		headerHeight,
		rowHeight,
		groupHeaderHeight,
		footerHeight,
		width,
		height,
		heightFromRowsCount,
		readonly,
		focusCell,
		onRowClick,
		onRowDoubleClick,
		onRowMouseEnter,
		onRowMouseLeave,
		onCellEnter,
		onCellLeave,
		onScrollEnd,
		scrollToRow,
		scrollToColumn,
		columns
	} = props

	//高度根据行数计算
	if(heightFromRowsCount){
 		height = headerHeight + 2 + rowHeight * rowsCount + footerHeight
	}


	return (
		<Table 
			key = {key}
			rowsCount={rowsCount}
			headerHeight={headerHeight}
			rowHeight={rowHeight}
			groupHeaderHeight={groupHeaderHeight}
			footerHeight={footerHeight}
			width={width}
			height={height}
            scrollToRow = {scrollToRow}
            scrollToColumn ={scrollToColumn}
            onRowDoubleClick={disabled ? onRowDoubleClick : undefined}
			onRowClick={onRowClick}
			onRowMouseEnter={onRowMouseEnter}
			onRowMouseLeave={onRowMouseLeave}
            scrollEnd={onScrollEnd}
		>
			{columns}
		</Table>
	)
}

