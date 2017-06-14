'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = GridComponent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _fixedDataTable = require('fixed-data-table');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GridComponent(props) {
	var key = props.key,
	    rowsCount = props.rowsCount,
	    headerHeight = props.headerHeight,
	    rowHeight = props.rowHeight,
	    groupHeaderHeight = props.groupHeaderHeight,
	    footerHeight = props.footerHeight,
	    width = props.width,
	    height = props.height,
	    heightFromRowsCount = props.heightFromRowsCount,
	    readonly = props.readonly,
	    focusCell = props.focusCell,
	    onRowClick = props.onRowClick,
	    onRowDoubleClick = props.onRowDoubleClick,
	    onRowMouseEnter = props.onRowMouseEnter,
	    onRowMouseLeave = props.onRowMouseLeave,
	    onCellEnter = props.onCellEnter,
	    onCellLeave = props.onCellLeave,
	    onScrollEnd = props.onScrollEnd,
	    scrollToRow = props.scrollToRow,
	    scrollToColumn = props.scrollToColumn,
	    columns = props.columns;

	//高度根据行数计算

	if (heightFromRowsCount) {
		height = headerHeight + 2 + rowHeight * rowsCount + footerHeight;
	}

	return _react2.default.createElement(
		_fixedDataTable.Table,
		{
			key: key,
			rowsCount: rowsCount,
			headerHeight: headerHeight,
			rowHeight: rowHeight,
			groupHeaderHeight: groupHeaderHeight,
			footerHeight: footerHeight,
			width: width,
			height: height,
			scrollToRow: scrollToRow,
			scrollToColumn: scrollToColumn,
			onRowDoubleClick: readonly ? onRowDoubleClick : undefined,
			onRowClick: onRowClick,
			onRowMouseEnter: onRowMouseEnter,
			onRowMouseLeave: onRowMouseLeave,
			scrollEnd: onScrollEnd
		},
		columns
	);
}
module.exports = exports['default'];