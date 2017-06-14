import React,{Component} from 'react'
import { DataGrid,Checkbox  } from 'xr-component'

const Column = DataGrid.Column
const Cell = DataGrid.Cell
const TextCell = DataGrid.TextCell

const dataSource = []

for (let i = 0; i < 100; i++) {
	dataSource.push({
		code : `code${i}`,
		name: `name${i}`,
		memo: '这是一个使用textCell的示例，鼠标移入到当前会有提示',


	})
}

const columns = [
	<Column
		columnKey='select'
		fixed
		header={<Cell><Checkbox /></Cell>}
		cell={(ps)=><Cell><Checkbox/></Cell>}
		width={40}
	/>,
	<Column
		columnKey='code'
		header={<Cell>编码</Cell>}
		cell={(ps)=><TextCell value={dataSource[ps.rowIndex].code} />}
		footer={<Cell>footer</Cell>}
		width={200}
	/>,
	<Column
		columnKey='name'
		header={<Cell>名称</Cell>}
		cell={(ps)=><TextCell value={dataSource[ps.rowIndex].name} />}
		footer={<Cell>footer</Cell>}
		flexGrow={1}
		width={200}
	/>,
	<Column
		columnKey='memo'
		header={<Cell>描述</Cell>}
		cell={(ps)=><TextCell align='left' enableEllipsis value={dataSource[ps.rowIndex].memo} />}
		footer={<Cell>footer</Cell>}
		flexGrow={1}
		width={200}
	/>,
	<Column
		columnKey='单价'
		header={<Cell>Ext1</Cell>}
		cell={(ps)=><Cell>ext1</Cell>}
		flexGrow={1}
		width={400}
	/>,
	<Column
		columnKey='数量'
		header={<Cell>Ext2</Cell>}
		cell={(ps)=><Cell>ext2</Cell>}
		flexGrow={1}
		width={400}
	/>,
	<Column
		columnKey='金额'
		header={<Cell>Ext3</Cell>}
		cell={(ps)=><Cell>ext3</Cell>}
		flexGrow={1}
		width={400}
	/>
]

export default class Example1 extends Component {
	render() {
		return (
			<div style={{height:300, display:'flex'}}>
		 		<DataGrid
		 			headerHeight={35}
		 		    rowsCount={100}
        			rowHeight={35}
        			footerHeight={35}
        			columns = {columns}
    			/>
		  	</div>
		)
	}
}