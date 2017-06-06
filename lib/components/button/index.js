'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _buttonGroup = require('./buttonGroup');

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonComponent(props) {
	var _classNames;

	var className = (0, _classnames2.default)((_classNames = {
		'xr-btn': true
	}, (0, _defineProperty3.default)(_classNames, 'xr-btn-' + props.type, !!props.type), (0, _defineProperty3.default)(_classNames, props.className, !!props.className), _classNames));
	return _react2.default.createElement(_button2.default, (0, _extends3.default)({}, props, { className: className }));
}

ButtonComponent.Group = _buttonGroup2.default;

exports.default = ButtonComponent;
module.exports = exports['default'];