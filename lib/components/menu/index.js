'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MenuComponent(props) {
	return _react2.default.createElement(_menu2.default, (0, _extends3.default)({}, props, { className: 'xr-menu' }));
}

MenuComponent.Divider = _menu2.default.Divider;
MenuComponent.Item = _menu2.default.Item;
MenuComponent.SubMenu = _menu2.default.SubMenu;
MenuComponent.ItemGroup = _menu2.default.ItemGroup;

exports.default = MenuComponent;
module.exports = exports['default'];