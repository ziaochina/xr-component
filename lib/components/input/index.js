'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InputComponent(props) {
	var className = (0, _classnames2.default)((0, _defineProperty3.default)({
		'xr-input': true
	}, props.className, !!props.className));
	return _react2.default.createElement(_input2.default, (0, _extends3.default)({}, props, { className: className }));
}

InputComponent.Search = _input2.default.Search;
InputComponent.Group = _input2.default.Group;

exports.default = InputComponent;
module.exports = exports['default'];