'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _collapse = require('antd/lib/collapse');

var _collapse2 = _interopRequireDefault(_collapse);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = CollapseComponent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CollapseComponent(props) {
	return _react2.default.createElement(_collapse2.default, (0, _extends3.default)({}, props, { className: 'xr-collapse' }));
}
module.exports = exports['default'];