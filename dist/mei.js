"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 *
 * @version 1.0.0
 * @author germancutraro
 * @license MIT
 *
 **/

var Mei = function () {
  /* ** DOM MANIPULATION ** */
  var getElement = function getElement(query, type) {
    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

    if (query === "") throw new SyntaxError("You must specify the element selector");else if (query === 'document') {
      if (type !== undefined && query === 'document') document.addEventListener(type, cb);
      return document;
    } else {
      var element = document.querySelector(query);
      return type === undefined || type === "" ? element : element.addEventListener(type, cb);
    }
  };

  var getElements = function getElements() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var type = arguments[1];
    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

    if (query === "") throw new SyntaxError("You must specify the element selector");
    var elements = [].concat(_toConsumableArray(document.querySelectorAll(query)));
    return type === undefined || type === "" ? elements : elements.map(function (el) {
      return el.addEventListener(type, cb);
    });
  };

  /* ** CHANGING THE DOM ** */
  var createElement = function createElement(element, attributes) {
    if (element === "") throw new SyntaxError("You must specify a valid element");
    var el = document.createElement(element);
    Object.keys(attributes).map(function (key) {
      key !== "parent" && key !== "children" ? el[key] = attributes[key] : false;
    });
    // Parent AppendChild
    attributes.parent !== undefined ? attributes.parent.appendChild(el) : false;

    // Childs
    if (attributes.children !== undefined) {
      [].concat(_toConsumableArray(attributes.children)).map(function (child, i) {
        var newChildren = document.createElement(child.element);
        Object.keys(child).map(function (key) {
          key !== "element" ? newChildren[key] = attributes.children[i][key] : false;
        });
        el.appendChild(newChildren);
      });
    }
  };

  var removeElement = function removeElement(id) {
    var el = void 0;
    typeof id === "string" && id !== "" ? (el = document.querySelector(id), el !== null ? el.remove() : console.error("element not found")) : (typeof id === "undefined" ? "undefined" : _typeof(id)) === "object" ? id.remove() : console.error("Invalid ID specification");
  };

  var cloneElement = function cloneElement(element) {
    return (typeof element === "undefined" ? "undefined" : _typeof(element)) === "object" ? element.cloneNode(true) : typeof element === "string" ? undefined.getElement(element).cloneNode(true) : false;
  };

  /* ** STORAGE ** */

  // No returned!
  var setTypeOfStore = function setTypeOfStore(query) {
    var type = query === "local" ? localStorage : query === "session" ? sessionStorage : new Error("Must be local or session!");
    return type;
  };

  var store = function store() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var storeType = setTypeOfStore(config.store);
    storeType.setItem(config.item, JSON.stringify(config.data));
  };

  var clearStore = function clearStore(type) {
    var storeType = setTypeOfStore(type);
    var cleaned = storeType.clear() ? true : false;
    return cleaned;
  };

  var removeItemStore = function removeItemStore(type, item) {
    var storeType = setTypeOfStore(type);
    var isRemoved = storeType.removeItem(item) ? true : false;
    return isRemoved;
  };

  var displayStore = function displayStore(type, item) {
    var storeType = setTypeOfStore(type),
        items = void 0;
    storeType.getItem(item) === null ? items = [] : items = JSON.parse(storeType.getItem(item));
    return items;
  };

  return {
    /* DOM Manipulation */
    getElement: getElement,
    getElements: getElements,
    /* Changing the DOM */
    createElement: createElement,
    removeElement: removeElement,
    cloneElement: cloneElement,
    /* Storage */
    store: store,
    clearStore: clearStore,
    displayStore: displayStore,
    removeItemStore: removeItemStore
  };
}();