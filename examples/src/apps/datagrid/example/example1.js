import React,{Component} from 'react'
import { DataGrid  } from 'xr-component'

const Column = DataGrid.Column
const Cell = DataGrid.Cell

export default class Example1 extends Component {
	render() {
		return (
			<div>
		 		  <DataGrid
        rowsCount={100}
        rowHeight={50}
        width={1000}
        height={500}>
        <Column
          cell={<Cell>Basic content</Cell>}
          width={200}
        />
      </DataGrid>
		  	</div>
		)
	}
}