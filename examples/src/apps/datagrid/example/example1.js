import React,{Component} from 'react'
import { DataGrid  } from 'xr-component'

const Column = DataGrid.Column
const Cell = DataGrid.Cell

const dataSource = []

for (let i = 0; i < 3; i++) {
	dataSource.push({
		code : `code${i}`,
		name: `name${i}`
	})
}

const columns = [
	<Column
		columnKey='code'
		header={<Cell>编码</Cell>}
		cell={(ps)=><Cell>{dataSource[ps.rowIndex].code}</Cell>}
		footer={<Cell>footer</Cell>}
		width={200}
	/>,
	<Column
		columnKey='name'
		header={<Cell>名称</Cell>}
		cell={(ps)=><Cell>{dataSource[ps.rowIndex].name}</Cell>}
		footer={<Cell>footer</Cell>}
		flexGrow={1}
		width={200}
	/>
]

export default class Example1 extends Component {
	render() {
		return (
			<div style={{height:300, display:'flex'}}>
		 		<DataGrid
		 			headerHeight={35}
		 		    rowsCount={3}
        			rowHeight={35}
        			footerHeight={35}
        			columns = {columns}
    			/>
		  	</div>
		)
	}
}