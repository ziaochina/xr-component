'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _info = require('./info');

var _info2 = _interopRequireDefault(_info);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _success = require('./success');

var _success2 = _interopRequireDefault(_success);

var _warning = require('./warning');

var _warning2 = _interopRequireDefault(_warning);

var _confirm = require('./confirm');

var _confirm2 = _interopRequireDefault(_confirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalComponent = function (_Component) {
	(0, _inherits3.default)(ModalComponent, _Component);

	function ModalComponent(props) {
		(0, _classCallCheck3.default)(this, ModalComponent);

		var _this = (0, _possibleConstructorReturn3.default)(this, (ModalComponent.__proto__ || (0, _getPrototypeOf2.default)(ModalComponent)).call(this, props));

		_this.state = {};

		_this.setOkListener = _this.setOkListener.bind(_this);
		_this.setCancelListener = _this.setCancelListener.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(ModalComponent, [{
		key: 'setOkListener',
		value: function setOkListener(cb) {
			this.setState({ okListener: cb });
		}
	}, {
		key: 'setCancelListener',
		value: function setCancelListener(cb) {
			this.setState({ cancelListener: cb });
		}
	}, {
		key: 'handleOk',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
				var listener, ret;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								listener = this.state.okListener, ret = void 0;

								if (!listener) {
									_context.next = 7;
									break;
								}

								_context.next = 4;
								return listener();

							case 4:
								ret = _context.sent;

								if (!(ret === false)) {
									_context.next = 7;
									break;
								}

								return _context.abrupt('return');

							case 7:

								this.props.onOk && this.props.onOk(ret);

							case 8:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function handleOk() {
				return _ref.apply(this, arguments);
			}

			return handleOk;
		}()
	}, {
		key: 'handleCancel',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
				var listener, ret;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								listener = this.state.cancelListener, ret = void 0;

								if (!listener) {
									_context2.next = 7;
									break;
								}

								_context2.next = 4;
								return listener();

							case 4:
								ret = _context2.sent;

								if (!(ret === false)) {
									_context2.next = 7;
									break;
								}

								return _context2.abrupt('return');

							case 7:

								this.props.onCancel && this.props.onCancel(ret);

							case 8:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function handleCancel() {
				return _ref2.apply(this, arguments);
			}

			return handleCancel;
		}()
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    children = _props.children,
			    otherProps = (0, _objectWithoutProperties3.default)(_props, ['children']);


			return _react2.default.createElement(_modal2.default, (0, _extends3.default)({
				visible: true
			}, this.props, {
				onOk: this.handleOk.bind(this),
				onCancel: this.handleCancel.bind(this)
			}));
		}
	}]);
	return ModalComponent;
}(_react.Component);

ModalComponent.newInstance = function (props) {
	return {
		show: function show(properties) {
			var div = document.createElement('div');

			return new _promise2.default(function (resolve, reject) {
				var handleCancel = function handleCancel(ret) {
					_reactDom2.default.unmountComponentAtNode(div);
					try {
						document.body.removeChild(div);
					} catch (err) {}
					resolve(ret || false);
				};

				var handleOk = function handleOk(ret) {
					_reactDom2.default.unmountComponentAtNode(div);
					try {
						document.body.removeChild(div);
					} catch (err) {}
					resolve(ret || true);
				};

				var props = properties || {};
				document.body.appendChild(div);

				_reactDom2.default.render(_react2.default.createElement(ModalComponent, (0, _extends3.default)({
					visible: true,
					maskClosable: false
				}, props, {
					onCancel: handleCancel,
					onOk: handleOk })), div);
			});
		}
	};
};

var m = window.__Modal;

if (!m) {
	m = ModalComponent.newInstance();
	window.__Modal = m;
}

m.info = _info2.default;
m.success = _success2.default;
m.error = _error2.default;
m.warning = _warning2.default;
m.confirm = _confirm2.default;

exports.default = m;
module.exports = exports['default'];