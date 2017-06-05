'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.default = IconComponent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconComponent(props) {
	var className = (0, _defineProperty3.default)({
		'xr-icon': true
	}, props.className, !!props.className);
	return _react2.default.createElement(_icon2.default, (0, _extends3.default)({}, props, { className: className }));
}
module.exports = exports['default'];