import React,{Component} from 'react'
import { DataGrid  } from 'xr-component'

const Column = DataGrid.Column
const Cell = DataGrid.Cell

export default class Example1 extends Component {
	render() {
		return (
			<div style={{height:400}}>
		 		<DataGrid
        			rowsCount={100}
        			rowHeight={50}
        			>
        			<Column
          				cell={<Cell>Basic content</Cell>}
          				width={200}
        			/>
      			</DataGrid>
		  	</div>
		)
	}
}