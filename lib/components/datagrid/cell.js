'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fixedDataTable = require('fixed-data-table');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cellComponent = function (_Component) {
    (0, _inherits3.default)(cellComponent, _Component);

    function cellComponent() {
        (0, _classCallCheck3.default)(this, cellComponent);
        return (0, _possibleConstructorReturn3.default)(this, (cellComponent.__proto__ || (0, _getPrototypeOf2.default)(cellComponent)).apply(this, arguments));
    }

    (0, _createClass3.default)(cellComponent, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                height = _props.height,
                width = _props.width,
                style = _props.style,
                className = _props.className,
                children = _props.children,
                other = (0, _objectWithoutProperties3.default)(_props, ['height', 'width', 'style', 'className', 'children']);


            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'fixedDataTableCellLayout_wrap1': true,
                'public_fixedDataTableCell_wrap1': true
            }, className, !!className));

            var innerStyle = (0, _extends3.default)({
                height: height,
                width: width
            }, style);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, other, { className: cls, style: innerStyle }),
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)('fixedDataTableCellLayout_wrap2', 'public_fixedDataTableCell_wrap2') },
                    _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)('fixedDataTableCellLayout_wrap3', 'public_fixedDataTableCell_wrap3') },
                        _react2.default.createElement(
                            'div',
                            { className: 'public-fixedDataTableCell-cellContent' },
                            children
                        )
                    )
                )
            );
        }
    }]);
    return cellComponent;
}(_react.Component);

exports.default = cellComponent;
module.exports = exports['default'];