"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _htmlTags = _interopRequireDefault(require("html-tags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let omit = (keys, obj) => {
  let obj2 = {};

  for (let key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      obj2[key] = obj[key];
    }
  }

  return obj2;
};

let Safe = _htmlTags.default.reduce((tags, tag) => {
  tags[tag] = class Tag extends _react.default.Component {
    render() {
      let {
        props
      } = this;
      return _react.default.createElement(tag, Object.assign(omit(["children"], props), {
        dangerouslySetInnerHTML: {
          __html: props.children
        }
      }));
    }

  };
  return tags;
}, {});

var _default = Safe;
exports.default = _default;