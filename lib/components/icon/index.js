'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = IconComponent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconComponent(props) {
	return _react2.default.createElement(_icon2.default, (0, _extends3.default)({}, props, { className: 'xr-icon' }));
}
module.exports = exports['default'];