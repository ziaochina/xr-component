import React, {Component} from 'react'
import {Cell} from 'fixed-data-table'
import classNames from 'classnames'

export default class cellComponent extends Component{
	render(){
		const {
      		height,
	      	width,
	      	style,
	      	className,
	      	children,
	      	...other
    	} = this.props

    	let cls = classnames({
    		'fixedDataTableCellLayout_wrap1':true,
    		'public_fixedDataTableCell_wrap1':true,
    		[className] : !!className
    	})

	 	var innerStyle = {
  			height,
  			width,
      		...style,
    	}

    	return (
      		<div {...other} className={cls} style={innerStyle}>
        		<div className={classnames('fixedDataTableCellLayout_wrap2','public_fixedDataTableCell_wrap2')}>
          			<div className={classnames('fixedDataTableCellLayout_wrap3','public_fixedDataTableCell_wrap3')}>
			            <div className={cx('public/fixedDataTableCell/cellContent')}>
			              	{children}
			            </div>
          			</div>
        		</div>
      		</div>
    );
	}

}