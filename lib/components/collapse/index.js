'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = CardComponent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardComponent(props) {
	return _react2.default.createElement(Card, (0, _extends3.default)({}, props, { className: 'xr-card' }));
}
module.exports = exports['default'];