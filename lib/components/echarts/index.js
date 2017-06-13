'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = EcharsComponent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _echartsForReact = require('echarts-for-react');

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

require('./macarons');

require('./shine');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EcharsComponent(props) {
	return _react2.default.createElement(_echartsForReact2.default, props);
}
module.exports = exports['default'];