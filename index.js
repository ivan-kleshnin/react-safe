"use strict";

var React = require("react");
var htmlTags = require("html-tags");

var omit = function omit(keys, obj) {
  var obj2 = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (!keys.includes(key)) {
        obj2[key] = obj[key];
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return obj2;
};

var Safe = htmlTags.reduce(function (tags, tag) {
  tags[tag] = function (props) {
    var children = props.children;
    delete props.children;
    return React.createElement(tag, Object.assign(omit(["children"], props), { dangerouslySetInnerHTML: { __html: props.children } }));
  };
  return tags;
}, {});

module.exports = Safe;