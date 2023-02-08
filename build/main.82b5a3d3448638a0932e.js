/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Card = /*#__PURE__*/function () {
  function Card(name, link, cardTemplate, handleCardClick) {
    _classCallCheck(this, Card);
    this._cardTemplate = cardTemplate;
    this._card = this._createCard();
    this._image = this._card.querySelector('.gallery__image');
    this._deleteButton = this._card.querySelector('.gallery__delete-button');
    this._caption = this._card.querySelector('.gallery__caption');
    this._placeName = this._card.querySelector('.gallery__place-name');
    this._like = this._card.querySelector('.gallery__like');
    this._link = link;
    this._name = name;
    this._handleCardClick = handleCardClick;
  }
  _createClass(Card, [{
    key: "_createCard",
    value: function _createCard() {
      return this._cardTemplate.content.querySelector('.gallery__card').cloneNode(true);
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      this._like.addEventListener('click', function () {
        _this._handleLikeClick();
      });
      this._deleteButton.addEventListener('click', function () {
        _this._handleDeleteCard();
      });
      this._image.addEventListener('click', function () {
        _this._handleCardClick(_this._name, _this._link);
      });
    }
  }, {
    key: "_handleLikeClick",
    value: function _handleLikeClick() {
      this._like.classList.toggle('gallery__like_active');
    }
  }, {
    key: "_handleDeleteCard",
    value: function _handleDeleteCard() {
      this._card.remove();
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._image.src = this._link;
      this._image.alt = this._name;
      this._placeName.textContent = this._name;
      this._setEventListeners();
      return this._card;
    }
  }]);
  return Card;
}();

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormValidator": () => (/* binding */ FormValidator)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(config, formElement) {
    _classCallCheck(this, FormValidator);
    this._form = formElement;
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
  }
  _createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(inputElement) {
      this._errorElement = this._form.querySelector(".".concat(inputElement.id, "-error"));
      this._errorElement.classList.add(this._errorClass);
      this._errorElement.textContent = inputElement.validationMessage;
      inputElement.classList.add(this._inputErrorClass);
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(inputElement) {
      this._errorElement = this._form.querySelector(".".concat(inputElement.id, "-error"));
      this._errorElement.classList.remove(this._errorClass);
      this._errorElement.textContent = '';
      inputElement.classList.remove(this._inputErrorClass);
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputElement) {
      if (inputElement.validity.valid) {
        this._hideInputError(inputElement);
      } else {
        this._showInputError(inputElement);
      }
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return this._inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.disabled = true;
      } else {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.disabled = false;
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
      this._buttonElement = this._form.querySelector(this._submitButtonSelector);
      this._toggleButtonState();
      this._inputList.forEach(function (inputElement) {
        inputElement.addEventListener('input', function () {
          _this._checkInputValidity(inputElement);
          _this._toggleButtonState();
        });
      });
    }
  }, {
    key: "resetValidation",
    value: function resetValidation() {
      var spanErrors = Array.from(this._form.querySelectorAll('.popup__text-error'));
      spanErrors.forEach(function (error) {
        error.textContent = '';
      });
      var inputs = Array.from(this._form.querySelectorAll('.popup__text'));
      inputs.forEach(function (input) {
        input.classList.remove('popup__text_type_error');
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._setEventListeners();
    }
  }]);
  return FormValidator;
}();

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popup": () => (/* binding */ Popup)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Popup = /*#__PURE__*/function () {
  function Popup(selector) {
    _classCallCheck(this, Popup);
    this._popup = selector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classList.remove('popup_opened');
      this._popup.removeEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === "Escape") {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;
      this._popup.addEventListener('mousedown', function (evt) {
        if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
          _this.close();
        }
      });
    }
  }]);
  return Popup;
}();

/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupWithForm": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(selector, handlerFormSubmit) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, selector);
    _this._handlerFormSubmit = handlerFormSubmit;
    _this._inputs = _this._popup.querySelectorAll('.popup__text');
    _this._form = _this._popup.querySelector('.popup__container');
    return _this;
  }
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;
      this._formValues = {};
      this._inputs.forEach(function (input) {
        _this2._formValues[input.name] = input.value;
      });
      return this._formValues;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      this._popup.addEventListener('submit', function (evt) {
        evt.preventDefault();
        _this3._getInputValues();
        _this3._handlerFormSubmit(_this3._formValues);
        _this3.close();
      });
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
      this._form.reset();
    }
  }]);
  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.Popup);

/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupWithImage": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(selector) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, selector);
    _this._popupImage = _this._popup.querySelector('.popup__image');
    _this._popupCaption = _this._popup.querySelector('.popup__caption');
    return _this;
  }
  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(link, name) {
      this._popupImage.src = link;
      this._popupImage.alt = name;
      this._popupCaption.textContent = name;
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);
  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.Popup);

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": () => (/* binding */ Section)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Section = /*#__PURE__*/function () {
  function Section(_ref, selector) {
    var items = _ref.items,
      renderer = _ref.renderer;
    var append = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    _classCallCheck(this, Section);
    this._items = items;
    this._renderer = renderer;
    this._container = selector;
    this._append = append;
  }
  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems() {
      var _this = this;
      this._items.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      if (this._append) {
        this._container.append(item);
      } else {
        this._container.prepend(item);
      }
    }
  }]);
  return Section;
}();

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInfo": () => (/* binding */ UserInfo)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var userNameSelector = _ref.userNameSelector,
      userJobSelector = _ref.userJobSelector;
    _classCallCheck(this, UserInfo);
    this._userName = document.querySelector(userNameSelector);
    this._userJob = document.querySelector(userJobSelector);
  }
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      var userData = {
        name: this._userName.textContent,
        job: this._userJob.textContent
      };
      return userData;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
        job = _ref2.job;
      this._userName.textContent = name;
      this._userJob.textContent = job;
    }
  }]);
  return UserInfo;
}();

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialCards": () => (/* binding */ initialCards),
/* harmony export */   "validationConfig": () => (/* binding */ validationConfig)
/* harmony export */ });
// список карточек для загрузки страницы
var initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];

//объект настроек с селекторами и классами формы
var validationConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__text-error_visible'
};

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");








var editPopupButton = document.querySelector('.profile__popup-open');
var popupEdit = document.querySelector('.popup_type_editing');
var popupAddImage = document.querySelector('.popup_type_add-card');
var inputName = document.querySelector('#name');
var inputJob = document.querySelector('#job');
var openAddFormButton = document.querySelector('.add-button');
var editForm = document.forms['editing'];
var addCardForm = document.forms['add-card'];
var bigPhoto = document.querySelector('.popup_type_image');
var cardTemplate = document.querySelector('#card');
var containerSelector = document.querySelector('.gallery');

// добавление валидации
var validators = new Map([[editForm.name, new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.FormValidator(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.validationConfig, editForm)], [addCardForm.name, new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.FormValidator(_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.validationConfig, addCardForm)]]);
validators.forEach(function (validator) {
  validator.enableValidation();
});

// добавляю рефакторинг 8 спринта

function createCard(obj) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__.Card(obj.name, obj.link, cardTemplate, handleCardClick);
  var cardElement = card.generateCard();
  cardList.addItem(cardElement);
}

// отрисовка карточек на странице
var cardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__.Section({
  items: _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__.initialCards,
  renderer: function renderer(item) {
    createCard(item);
  }
}, containerSelector);
cardList.renderItems();

// открытие попапа с картинкой при клике на карточку
function handleCardClick() {
  var popupWithImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__.PopupWithImage(bigPhoto);
  popupWithImage.setEventListeners();
  popupWithImage.open(this._link, this._name);
}

// функционал с классом UserInfo
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_5__.UserInfo({
  userNameSelector: '.profile__full-name',
  userJobSelector: '.profile__job'
});
function editFormSubmit(obj) {
  userInfo.setUserInfo(obj);
}
;

// экземпляр попапа редактирования профиля
var popupWithEditForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_7__.PopupWithForm(popupEdit, editFormSubmit);

// открытие попапа редактирования формы
editPopupButton.addEventListener('click', function () {
  var _userInfo$getUserInfo = userInfo.getUserInfo(),
    name = _userInfo$getUserInfo.name,
    job = _userInfo$getUserInfo.job;
  inputName.value = name;
  inputJob.value = job;
  popupWithEditForm.open();
  validators.get(editForm.name).resetValidation();
});

// сабмит формы редактирования профиля
popupWithEditForm.setEventListeners();

// экземпляр попапа добавления карточки
var popupWithAddImageForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_7__.PopupWithForm(popupAddImage, addImageFormSubmit);

// открытие попапа добавления карточки
openAddFormButton.addEventListener('click', function () {
  popupWithAddImageForm.open();
  validators.get(addCardForm.name).resetValidation();
});

// сабмит формы добавления карточки

function addImageFormSubmit(obj) {
  createCard(obj);
  popupWithAddImageForm.close();
}
popupWithAddImageForm.setEventListeners();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckgsSUFBSSxDQUFDLENBQUMrSSxlQUFlLEVBQUU7QUFDakQsQ0FBQyxDQUFDOztBQUVGO0FBQ0FILGlCQUFpQixDQUFDTCxpQkFBaUIsRUFBRTs7QUFFckM7QUFDQSxJQUFNUyxxQkFBcUIsR0FBRyxJQUFJaEUsdUVBQWEsQ0FBQ2lDLGFBQWEsRUFBRWdDLGtCQUFrQixDQUFDOztBQUVsRjtBQUNBN0IsaUJBQWlCLENBQUNsRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUNoRDhILHFCQUFxQixDQUFDUixJQUFJLEVBQUU7RUFDNUJkLFVBQVUsQ0FBQ29CLEdBQUcsQ0FBQ3ZCLFdBQVcsQ0FBQ3ZILElBQUksQ0FBQyxDQUFDK0ksZUFBZSxFQUFFO0FBQ3BELENBQUMsQ0FBQzs7QUFFRjs7QUFFQSxTQUFTRSxrQkFBa0IsQ0FBQ2xCLEdBQUcsRUFBRTtFQUMvQkQsVUFBVSxDQUFDQyxHQUFHLENBQUM7RUFDZmlCLHFCQUFxQixDQUFDbkUsS0FBSyxFQUFFO0FBQy9CO0FBRUFtRSxxQkFBcUIsQ0FBQ1QsaUJBQWlCLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBsaW5rLCBjYXJkVGVtcGxhdGUsIGhhbmRsZUNhcmRDbGljaykge1xuICAgIHRoaXMuX2NhcmRUZW1wbGF0ZSA9IGNhcmRUZW1wbGF0ZTtcbiAgICB0aGlzLl9jYXJkID0gdGhpcy5fY3JlYXRlQ2FyZCgpO1xuICAgIHRoaXMuX2ltYWdlID0gdGhpcy5fY2FyZC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9faW1hZ2UnKTtcbiAgICB0aGlzLl9kZWxldGVCdXR0b24gPSB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5X19kZWxldGUtYnV0dG9uJyk7XG4gICAgdGhpcy5fY2FwdGlvbiA9IHRoaXMuX2NhcmQucXVlcnlTZWxlY3RvcignLmdhbGxlcnlfX2NhcHRpb24nKTtcbiAgICB0aGlzLl9wbGFjZU5hbWUgPSB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5X19wbGFjZS1uYW1lJyk7XG4gICAgdGhpcy5fbGlrZSA9IHRoaXMuX2NhcmQucXVlcnlTZWxlY3RvcignLmdhbGxlcnlfX2xpa2UnKTtcbiAgICB0aGlzLl9saW5rID0gbGluaztcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gIH1cbiAgXG4gIF9jcmVhdGVDYXJkKCkge1xuICAgIHJldHVybiB0aGlzLl9jYXJkVGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9fY2FyZCcpLmNsb25lTm9kZSh0cnVlKTtcbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9saWtlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlTGlrZUNsaWNrKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9pbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl9uYW1lLCB0aGlzLl9saW5rKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9oYW5kbGVMaWtlQ2xpY2soKSB7XG4gICAgdGhpcy5fbGlrZS5jbGFzc0xpc3QudG9nZ2xlKCdnYWxsZXJ5X19saWtlX2FjdGl2ZScpO1xuICB9XG5cbiAgX2hhbmRsZURlbGV0ZUNhcmQoKSB7XG4gICAgdGhpcy5fY2FyZC5yZW1vdmUoKTtcbiAgfVxuXG4gIGdlbmVyYXRlQ2FyZCgpIHtcbiAgICB0aGlzLl9pbWFnZS5zcmMgPSB0aGlzLl9saW5rO1xuICAgIHRoaXMuX2ltYWdlLmFsdCA9IHRoaXMuX25hbWU7XG4gICAgdGhpcy5fcGxhY2VOYW1lLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2NhcmQ7XG4gIH1cbn0iLCJleHBvcnQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgZm9ybUVsZW1lbnQpIHtcbiAgICB0aGlzLl9mb3JtID0gZm9ybUVsZW1lbnQ7XG4gICAgdGhpcy5fZm9ybVNlbGVjdG9yID0gY29uZmlnLmZvcm1TZWxlY3RvcjtcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gY29uZmlnLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBjb25maWcuc3VibWl0QnV0dG9uU2VsZWN0b3I7XG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IGNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IGNvbmZpZy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IGNvbmZpZy5lcnJvckNsYXNzO1xuICB9XG5cbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xuICAgIHRoaXMuX2Vycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xuXG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gIH07XG5cbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xuICAgIHRoaXMuX2Vycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xuICAgIHRoaXMuX2Vycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIHRoaXMuX2Vycm9yRWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gIH07XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpIHtcbiAgICBpZiAoaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpXG4gICAgfVxuICB9O1xuXG4gIF9oYXNJbnZhbGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+ICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpO1xuICB9O1xuXG4gIF90b2dnbGVCdXR0b25TdGF0ZSgpe1xuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQoKSkge1xuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpKTtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcblxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XG5cbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7IFxuICAgICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xuICAgICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcbiAgICBjb25zdCBzcGFuRXJyb3JzID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9fdGV4dC1lcnJvcicpKTtcbiAgICBzcGFuRXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICB9KTtcblxuICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20odGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX3RleHQnKSk7XG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXBfX3RleHRfdHlwZV9lcnJvcicpO1xuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpXG4gIH1cbn0iLCJleHBvcnQgY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuX3BvcHVwID0gc2VsZWN0b3I7XG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cF9vcGVuZWQnKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXBfb3BlbmVkJyk7XG4gICAgdGhpcy5fcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxuXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldnQpID0+IHtcbiAgICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXBfb3BlbmVkJykgfHwgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX19jbG9zZS1idXR0b24nKSkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufSIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi9Qb3B1cC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgaGFuZGxlckZvcm1TdWJtaXQpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gICAgXG4gICAgdGhpcy5faGFuZGxlckZvcm1TdWJtaXQgPSBoYW5kbGVyRm9ybVN1Ym1pdDtcbiAgICB0aGlzLl9pbnB1dHMgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX3RleHQnKTtcbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19jb250YWluZXInKTtcbiAgfVxuXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICB0aGlzLl9mb3JtVmFsdWVzID0ge307XG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICB0aGlzLl9mb3JtVmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1WYWx1ZXM7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKTtcbiAgICAgIHRoaXMuX2hhbmRsZXJGb3JtU3VibWl0KHRoaXMuX2Zvcm1WYWx1ZXMpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pXG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBzdXBlci5jbG9zZSgpO1xuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcbiAgfVxufSIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi9Qb3B1cC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLl9wb3B1cEltYWdlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbWFnZScpO1xuICAgIHRoaXMuX3BvcHVwQ2FwdGlvbiA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2FwdGlvbicpO1xuICB9XG5cbiAgb3BlbihsaW5rLCBuYW1lKSB7XG4gICAgdGhpcy5fcG9wdXBJbWFnZS5zcmMgPSBsaW5rO1xuICAgIHRoaXMuX3BvcHVwSW1hZ2UuYWx0ID0gbmFtZTtcbiAgICB0aGlzLl9wb3B1cENhcHRpb24udGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgc3VwZXIub3BlbigpO1xuICB9XG59IiwiZXhwb3J0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9LCBzZWxlY3RvciwgYXBwZW5kID0gZmFsc2UpIHtcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5fY29udGFpbmVyID0gc2VsZWN0b3I7XG4gICAgdGhpcy5fYXBwZW5kID0gYXBwZW5kO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoKSB7XG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSXRlbShpdGVtKSB7XG4gICAgaWYgKHRoaXMuX2FwcGVuZCkge1xuICAgICAgdGhpcy5fY29udGFpbmVyLmFwcGVuZChpdGVtKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChpdGVtKVxuICAgIH1cbiAgfVxufSIsImV4cG9ydCBjbGFzcyBVc2VySW5mbyB7XG4gIGNvbnN0cnVjdG9yKHsgdXNlck5hbWVTZWxlY3RvciwgdXNlckpvYlNlbGVjdG9yIH0pIHtcbiAgICB0aGlzLl91c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlck5hbWVTZWxlY3Rvcik7XG4gICAgdGhpcy5fdXNlckpvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlckpvYlNlbGVjdG9yKTtcbiAgfVxuXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIGNvbnN0IHVzZXJEYXRhID0ge1xuICAgICAgbmFtZTogdGhpcy5fdXNlck5hbWUudGV4dENvbnRlbnQsXG4gICAgICBqb2I6IHRoaXMuX3VzZXJKb2IudGV4dENvbnRlbnRcbiAgICB9XG4gICAgcmV0dXJuIHVzZXJEYXRhXG4gIH1cblxuICBzZXRVc2VySW5mbyh7IG5hbWUsIGpvYiB9KSB7XG4gICAgdGhpcy5fdXNlck5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHRoaXMuX3VzZXJKb2IudGV4dENvbnRlbnQgPSBqb2I7XG4gIH1cbn0iLCIvLyDRgdC/0LjRgdC+0Log0LrQsNGA0YLQvtGH0LXQuiDQtNC70Y8g0LfQsNCz0YDRg9C30LrQuCDRgdGC0YDQsNC90LjRhtGLXG5leHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgbmFtZTogJ9CQ0YDRhdGL0LcnLFxuICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvYXJraHl6LmpwZydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICfQp9C10LvRj9Cx0LjQvdGB0LrQsNGPINC+0LHQu9Cw0YHRgtGMJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2NoZWx5YWJpbnNrLW9ibGFzdC5qcGcnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAn0JjQstCw0L3QvtCy0L4nLFxuICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvaXZhbm92by5qcGcnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAn0JrQsNC80YfQsNGC0LrQsCcsXG4gICAgbGluazogJ2h0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9rYW1jaGF0a2EuanBnJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ9Cl0L7Qu9C80L7Qs9C+0YDRgdC60LjQuSDRgNCw0LnQvtC9JyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2tob2xtb2dvcnNreS1yYXlvbi5qcGcnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAn0JHQsNC50LrQsNC7JyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2JhaWthbC5qcGcnXG4gIH1cbl07XG5cbi8v0L7QsdGK0LXQutGCINC90LDRgdGC0YDQvtC10Log0YEg0YHQtdC70LXQutGC0L7RgNCw0LzQuCDQuCDQutC70LDRgdGB0LDQvNC4INGE0L7RgNC80YtcbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uQ29uZmlnID0ge1xuICBmb3JtU2VsZWN0b3I6ICcucG9wdXBfX2NvbnRhaW5lcicsXG4gIGlucHV0U2VsZWN0b3I6ICcucG9wdXBfX3RleHQnLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogJy5wb3B1cF9fYnV0dG9uJyxcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogJ3BvcHVwX19idXR0b25faW5hY3RpdmUnLFxuICBpbnB1dEVycm9yQ2xhc3M6ICdwb3B1cF9fdGV4dF90eXBlX2Vycm9yJyxcbiAgZXJyb3JDbGFzczogJ3BvcHVwX190ZXh0LWVycm9yX3Zpc2libGUnLFxufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkLmpzJztcbmltcG9ydCB7IEZvcm1WYWxpZGF0b3IgfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMnO1xuaW1wb3J0IHsgaW5pdGlhbENhcmRzLCB2YWxpZGF0aW9uQ29uZmlnIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzLmpzJztcblxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbi5qcyc7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckluZm8uanMnO1xuaW1wb3J0IHsgUG9wdXBXaXRoSW1hZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzJztcbmltcG9ydCB7IFBvcHVwV2l0aEZvcm0gfSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMnO1xuXG5jb25zdCBlZGl0UG9wdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fcG9wdXAtb3BlbicpO1xuXG5jb25zdCBwb3B1cEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfdHlwZV9lZGl0aW5nJyk7XG5jb25zdCBwb3B1cEFkZEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX3R5cGVfYWRkLWNhcmQnKTtcblxuY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbmNvbnN0IGlucHV0Sm9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pvYicpO1xuXG5jb25zdCBvcGVuQWRkRm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtYnV0dG9uJyk7XG5cbmNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuZm9ybXNbJ2VkaXRpbmcnXTtcbmNvbnN0IGFkZENhcmRGb3JtID0gZG9jdW1lbnQuZm9ybXNbJ2FkZC1jYXJkJ107XG5jb25zdCBiaWdQaG90byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF90eXBlX2ltYWdlJyk7XG5cbmNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkJyk7XG5cbmNvbnN0IGNvbnRhaW5lclNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnknKTtcblxuLy8g0LTQvtCx0LDQstC70LXQvdC40LUg0LLQsNC70LjQtNCw0YbQuNC4XG5jb25zdCB2YWxpZGF0b3JzID0gbmV3IE1hcChbXG4gIFtlZGl0Rm9ybS5uYW1lLCBuZXcgRm9ybVZhbGlkYXRvcih2YWxpZGF0aW9uQ29uZmlnLCBlZGl0Rm9ybSldLFxuICBbYWRkQ2FyZEZvcm0ubmFtZSwgbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRhdGlvbkNvbmZpZywgYWRkQ2FyZEZvcm0pXVxuXSk7XG5cbnZhbGlkYXRvcnMuZm9yRWFjaCgodmFsaWRhdG9yKSA9PiB7XG4gIHZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG59KTtcblxuLy8g0LTQvtCx0LDQstC70Y/RjiDRgNC10YTQsNC60YLQvtGA0LjQvdCzIDgg0YHQv9GA0LjQvdGC0LBcblxuZnVuY3Rpb24gY3JlYXRlQ2FyZChvYmopIHtcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKG9iai5uYW1lLCBvYmoubGluaywgY2FyZFRlbXBsYXRlLCBoYW5kbGVDYXJkQ2xpY2spO1xuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmQuZ2VuZXJhdGVDYXJkKCk7XG4gIGNhcmRMaXN0LmFkZEl0ZW0oY2FyZEVsZW1lbnQpO1xufVxuXG4vLyDQvtGC0YDQuNGB0L7QstC60LAg0LrQsNGA0YLQvtGH0LXQuiDQvdCwINGB0YLRgNCw0L3QuNGG0LVcbmNvbnN0IGNhcmRMaXN0ID0gbmV3IFNlY3Rpb24oe1xuICBpdGVtczogaW5pdGlhbENhcmRzLFxuICByZW5kZXJlcjogKGl0ZW0pID0+IHtcbiAgICBjcmVhdGVDYXJkKGl0ZW0pO1xuICB9XG59LCBjb250YWluZXJTZWxlY3RvcilcblxuY2FyZExpc3QucmVuZGVySXRlbXMoKTtcblxuLy8g0L7RgtC60YDRi9GC0LjQtSDQv9C+0L/QsNC/0LAg0YEg0LrQsNGA0YLQuNC90LrQvtC5INC/0YDQuCDQutC70LjQutC1INC90LAg0LrQsNGA0YLQvtGH0LrRg1xuZnVuY3Rpb24gaGFuZGxlQ2FyZENsaWNrKCkge1xuICBjb25zdCBwb3B1cFdpdGhJbWFnZSA9IG5ldyBQb3B1cFdpdGhJbWFnZShiaWdQaG90byk7XG4gIHBvcHVwV2l0aEltYWdlLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIHBvcHVwV2l0aEltYWdlLm9wZW4odGhpcy5fbGluaywgdGhpcy5fbmFtZSk7XG59XG5cbi8vINGE0YPQvdC60YbQuNC+0L3QsNC7INGBINC60LvQsNGB0YHQvtC8IFVzZXJJbmZvXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XG4gIHVzZXJOYW1lU2VsZWN0b3I6ICcucHJvZmlsZV9fZnVsbC1uYW1lJyxcbiAgdXNlckpvYlNlbGVjdG9yOiAnLnByb2ZpbGVfX2pvYidcbn0pO1xuXG5mdW5jdGlvbiBlZGl0Rm9ybVN1Ym1pdChvYmopIHtcbiAgdXNlckluZm8uc2V0VXNlckluZm8ob2JqKVxufTtcblxuLy8g0Y3QutC30LXQvNC/0LvRj9GAINC/0L7Qv9Cw0L/QsCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINC/0YDQvtGE0LjQu9GPXG5jb25zdCBwb3B1cFdpdGhFZGl0Rm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKHBvcHVwRWRpdCwgZWRpdEZvcm1TdWJtaXQpO1xuXG4vLyDQvtGC0LrRgNGL0YLQuNC1INC/0L7Qv9Cw0L/QsCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINGE0L7RgNC80YtcbmVkaXRQb3B1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgeyBuYW1lLCBqb2IgfSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XG4gIGlucHV0TmFtZS52YWx1ZSA9IG5hbWU7XG4gIGlucHV0Sm9iLnZhbHVlID0gam9iO1xuICBwb3B1cFdpdGhFZGl0Rm9ybS5vcGVuKCk7XG4gIHZhbGlkYXRvcnMuZ2V0KGVkaXRGb3JtLm5hbWUpLnJlc2V0VmFsaWRhdGlvbigpO1xufSk7XG5cbi8vINGB0LDQsdC80LjRgiDRhNC+0YDQvNGLINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0L/RgNC+0YTQuNC70Y9cbnBvcHVwV2l0aEVkaXRGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vINGN0LrQt9C10LzQv9C70Y/RgCDQv9C+0L/QsNC/0LAg0LTQvtCx0LDQstC70LXQvdC40Y8g0LrQsNGA0YLQvtGH0LrQuFxuY29uc3QgcG9wdXBXaXRoQWRkSW1hZ2VGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0ocG9wdXBBZGRJbWFnZSwgYWRkSW1hZ2VGb3JtU3VibWl0KTtcblxuLy8g0L7RgtC60YDRi9GC0LjQtSDQv9C+0L/QsNC/0LAg0LTQvtCx0LDQstC70LXQvdC40Y8g0LrQsNGA0YLQvtGH0LrQuFxub3BlbkFkZEZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHBvcHVwV2l0aEFkZEltYWdlRm9ybS5vcGVuKCk7XG4gIHZhbGlkYXRvcnMuZ2V0KGFkZENhcmRGb3JtLm5hbWUpLnJlc2V0VmFsaWRhdGlvbigpO1xufSlcblxuLy8g0YHQsNCx0LzQuNGCINGE0L7RgNC80Ysg0LTQvtCx0LDQstC70LXQvdC40Y8g0LrQsNGA0YLQvtGH0LrQuFxuXG5mdW5jdGlvbiBhZGRJbWFnZUZvcm1TdWJtaXQob2JqKSB7XG4gIGNyZWF0ZUNhcmQob2JqKTtcbiAgcG9wdXBXaXRoQWRkSW1hZ2VGb3JtLmNsb3NlKCk7XG59XG5cbnBvcHVwV2l0aEFkZEltYWdlRm9ybS5zZXRFdmVudExpc3RlbmVycygpOyJdLCJuYW1lcyI6WyJDYXJkIiwibmFtZSIsImxpbmsiLCJjYXJkVGVtcGxhdGUiLCJoYW5kbGVDYXJkQ2xpY2siLCJfY2FyZFRlbXBsYXRlIiwiX2NhcmQiLCJfY3JlYXRlQ2FyZCIsIl9pbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJfZGVsZXRlQnV0dG9uIiwiX2NhcHRpb24iLCJfcGxhY2VOYW1lIiwiX2xpa2UiLCJfbGluayIsIl9uYW1lIiwiX2hhbmRsZUNhcmRDbGljayIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRsZUxpa2VDbGljayIsIl9oYW5kbGVEZWxldGVDYXJkIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVtb3ZlIiwic3JjIiwiYWx0IiwidGV4dENvbnRlbnQiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJGb3JtVmFsaWRhdG9yIiwiY29uZmlnIiwiZm9ybUVsZW1lbnQiLCJfZm9ybSIsIl9mb3JtU2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJpbnB1dEVsZW1lbnQiLCJfZXJyb3JFbGVtZW50IiwiaWQiLCJhZGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGlkZUlucHV0RXJyb3IiLCJfc2hvd0lucHV0RXJyb3IiLCJfaW5wdXRMaXN0Iiwic29tZSIsIl9oYXNJbnZhbGlkSW5wdXQiLCJfYnV0dG9uRWxlbWVudCIsImRpc2FibGVkIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5Iiwic3BhbkVycm9ycyIsImVycm9yIiwiaW5wdXRzIiwiaW5wdXQiLCJQb3B1cCIsInNlbGVjdG9yIiwiX3BvcHVwIiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2dCIsImtleSIsImNsb3NlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJQb3B1cFdpdGhGb3JtIiwiaGFuZGxlckZvcm1TdWJtaXQiLCJfaGFuZGxlckZvcm1TdWJtaXQiLCJfaW5wdXRzIiwiX2Zvcm1WYWx1ZXMiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiX2dldElucHV0VmFsdWVzIiwicmVzZXQiLCJQb3B1cFdpdGhJbWFnZSIsIl9wb3B1cEltYWdlIiwiX3BvcHVwQ2FwdGlvbiIsIlNlY3Rpb24iLCJpdGVtcyIsInJlbmRlcmVyIiwiYXBwZW5kIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsIl9hcHBlbmQiLCJpdGVtIiwicHJlcGVuZCIsIlVzZXJJbmZvIiwidXNlck5hbWVTZWxlY3RvciIsInVzZXJKb2JTZWxlY3RvciIsIl91c2VyTmFtZSIsIl91c2VySm9iIiwidXNlckRhdGEiLCJqb2IiLCJpbml0aWFsQ2FyZHMiLCJ2YWxpZGF0aW9uQ29uZmlnIiwiZWRpdFBvcHVwQnV0dG9uIiwicG9wdXBFZGl0IiwicG9wdXBBZGRJbWFnZSIsImlucHV0TmFtZSIsImlucHV0Sm9iIiwib3BlbkFkZEZvcm1CdXR0b24iLCJlZGl0Rm9ybSIsImZvcm1zIiwiYWRkQ2FyZEZvcm0iLCJiaWdQaG90byIsImNvbnRhaW5lclNlbGVjdG9yIiwidmFsaWRhdG9ycyIsIk1hcCIsInZhbGlkYXRvciIsImVuYWJsZVZhbGlkYXRpb24iLCJjcmVhdGVDYXJkIiwib2JqIiwiY2FyZCIsImNhcmRFbGVtZW50IiwiZ2VuZXJhdGVDYXJkIiwiY2FyZExpc3QiLCJhZGRJdGVtIiwicmVuZGVySXRlbXMiLCJwb3B1cFdpdGhJbWFnZSIsInNldEV2ZW50TGlzdGVuZXJzIiwib3BlbiIsInVzZXJJbmZvIiwiZWRpdEZvcm1TdWJtaXQiLCJzZXRVc2VySW5mbyIsInBvcHVwV2l0aEVkaXRGb3JtIiwiZ2V0VXNlckluZm8iLCJnZXQiLCJyZXNldFZhbGlkYXRpb24iLCJwb3B1cFdpdGhBZGRJbWFnZUZvcm0iLCJhZGRJbWFnZUZvcm1TdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9