import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { DataGrid,Checkbox, Input  } from 'xr-component'

const Column = DataGrid.Column
const Cell = DataGrid.Cell
const TextCell = DataGrid.TextCell

export default class Example1 extends Component {


	constructor(props){
		super(props)

		this.state = {
			focusCellInfo:undefined,
			dataSource: []
		}

		for (let i = 0; i < 100; i++) {
			this.state.dataSource.push({
				code : `code${i}`,
				name: `name${i}`,
			})
		}

		this.isFocusCell = this.isFocusCell.bind(this)
		this.handleCellClick = this.handleCellClick.bind(this) 

	}

	isFocusCell(ps, columnKey){
		if(!this.state.focusCellInfo)
			return false
		return this.state.focusCellInfo.columnKey == columnKey && this.state.focusCellInfo.rowIndex == ps.rowIndex
	}

	handleCellClick(ps, columnKey){
		return ()=>{
			this.setState({focusCellInfo:{rowIndex:ps.rowIndex, columnKey}})
			const that = this
			setTimeout(()=>{
				ReactDOM.findDOMNode(columnKey == 'code'?this.refCode:this.refName).focus()
			},0)
		}
	}

	handleCellChange(ps, columnKey){
		return (e)=>{
			var dataSource = this.state.dataSource
			dataSource[ps.rowIndex][columnKey] = e.target.value
			this.setState({dataSource})
		}
	}

	getColumns(){
		let dataSource = this.state.dataSource
		const columns = []
		const codeCellGetter = (ps) => {
			return this.isFocusCell(ps, 'code') 
				? <Input 
					style={{width:'100%',height:'100%'}}
					onChange={::this.handleCellChange(ps, 'code')} 
					value={dataSource[ps.rowIndex].code}  
					ref = {o=>this.refCode = o} /> 
				: <TextCell 
					onClick={::this.handleCellClick(ps, 'code')} 
					value={dataSource[ps.rowIndex].code} />
		}
		columns.push(<Column
			columnKey='code'
			header={<Cell>编码</Cell>}
			cell={codeCellGetter}
			footer={<Cell>footer</Cell>}
			width={200}
		/>)

		const nameCellGetter = (ps) => {
			return this.isFocusCell(ps, 'name') 
				? <Input 
					style={{width:'100%',height:'100%'}}  
					onChange={::this.handleCellChange(ps, 'name')} 
					value={dataSource[ps.rowIndex].name} 
					ref={o=>this.refName = o} /> 
				: <TextCell 
					onClick={::this.handleCellClick(ps, 'name')} 
					value={dataSource[ps.rowIndex].name} />
		}
		columns.push(<Column
			columnKey='name'
			header={<Cell>名称</Cell>}
			cell={nameCellGetter}
			footer={<Cell>footer</Cell>}
			width={200}
			flexGrow={1}
		/>)

		return columns
	}

	render() {
		return (
			<div style={{height:300,width:'100%', display:'flex'}}>
		 		<DataGrid
		 			headerHeight={50}
		 		    rowsCount={100}
        			rowHeight={50}
        			footerHeight={50}
        			readonly={false}
        			enableSequence={true}
        			enableAddDelrow={true}
        			startSequence={1}
        			onAddrow={()=>{}}
        			onDelrow={()=>{}}
        			columns = {this.getColumns()}
    			/>
		  	</div>
		)
	}
}