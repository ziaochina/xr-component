'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = createNormalColumn;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fixedDataTable = require('fixed-data-table');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createNormalColumn(props) {
	var key = props.key,
	    flexGrow = props.flexGrow,
	    fixed = props.fixed,
	    width = props.width,
	    cellGetter = props.cellGetter,
	    headerGetter = props.headerGetter,
	    footerGetter = props.footerGetter;


	return _react2.default.createElement(_fixedDataTable.Column, {
		key: key,
		columnKey: key,
		flexGrow: flexGrow,
		fixed: fixed,
		width: width,
		cell: cellGetter,
		header: headerGetter,
		footer: footerGetter
	});
}
module.exports = exports['default'];