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

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fixedDataTable = require('fixed-data-table');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatByThousand = function formatByThousand(num) {
      if (isNaN(num)) {
            return num;
      }
      return ("" + num).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,");
};

var replaceSpaceToNbsp = function replaceSpaceToNbsp(text) {
      return (0, _from2.default)(text).map(function (o) {
            if (o === ' ') {
                  return _react2.default.createElement('&nbsp;');
            }
            return o;
      });
};

var textCellComponent = function (_Component) {
      (0, _inherits3.default)(textCellComponent, _Component);

      function textCellComponent() {
            (0, _classCallCheck3.default)(this, textCellComponent);
            return (0, _possibleConstructorReturn3.default)(this, (textCellComponent.__proto__ || (0, _getPrototypeOf2.default)(textCellComponent)).apply(this, arguments));
      }

      (0, _createClass3.default)(textCellComponent, [{
            key: 'render',
            value: function render() {
                  var _classNames;

                  var _props = this.props,
                      height = _props.height,
                      width = _props.width,
                      style = _props.style,
                      className = _props.className,
                      align = _props.align,
                      format = _props.format,
                      value = _props.value,
                      dataType = _props.dataType,
                      precision = _props.precision,
                      enableTooltip = _props.enableTooltip,
                      enableEllipsis = _props.enableEllipsis,
                      transSpaceToNbsp = _props.transSpaceToNbsp,
                      other = (0, _objectWithoutProperties3.default)(_props, ['height', 'width', 'style', 'className', 'align', 'format', 'value', 'dataType', 'precision', 'enableTooltip', 'enableEllipsis', 'transSpaceToNbsp']);


                  var cls = (0, _classnames2.default)((_classNames = {
                        'xr-datagrid-cellContent': true
                  }, (0, _defineProperty3.default)(_classNames, 'xr-datagrid-cellContent-' + align, !!align), (0, _defineProperty3.default)(_classNames, className, !!className), _classNames));

                  var innerStyle = (0, _extends3.default)({
                        height: height,
                        width: width
                  }, style);

                  switch (dataType) {
                        case 'bool':
                              value = value == undefined || value == false ? '否' : '是';
                              break;
                        case 'float':
                              if (precision && !!value) {
                                    value = parseFloat(value).toFixed(precision);
                              }
                              break;
                  }

                  if (value == null || value == undefined) {
                        value = '';
                  }

                  if (transSpaceToNbsp) {
                        value = replaceSpaceToNbsp(value);
                  }

                  if (format == 'thousand') {
                        value = formatByThousand(value);
                  }

                  value = value + '';
                  var ext = {};
                  if (enableTooltip) {
                        ext.title = value;
                  }

                  if (enableEllipsis) {
                        innerStyle = (0, _extends3.default)({}, innerStyle, { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' });
                        ext.title = value;
                        value = [value, '...'];
                  }

                  return _react2.default.createElement(
                        'div',
                        (0, _extends3.default)({}, other, { className: cls, style: innerStyle }, ext),
                        value
                  );
            }
      }]);
      return textCellComponent;
}(_react.Component);

exports.default = textCellComponent;
module.exports = exports['default'];