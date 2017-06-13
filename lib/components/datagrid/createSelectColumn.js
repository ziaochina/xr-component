'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = createSelectColumn;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fixedDataTable = require('fixed-data-table');

var _xComponent = require('xComponent');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createSelectColumn(props) {
	var key = props.key,
	    width = props.width,
	    cellGetter = props.cellGetter,
	    headerGetter = props.headerGetter,
	    footerGetter = props.footerGetter;


	return _react2.default.createElement(_fixedDataTable.Column, {
		key: key,
		columnKey: key,
		fixed: true,
		width: width,
		cell: cellGetter,
		header: headerGetter,
		footer: footerGetter
	});
}
module.exports = exports['default'];