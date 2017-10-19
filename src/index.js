let React = require("react")
let htmlTags = require("html-tags")

let omit = (keys, obj) => {
  let obj2 = {}
  for (let key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      obj2[key] = obj[key]
    }
  }
  return obj2
}

let Safe = htmlTags.reduce((tags, tag) => {
  tags[tag] = (props) => {
    return React.createElement(tag, Object.assign(
      omit(["children"], props),
      {dangerouslySetInnerHTML: {__html: props.children}}
    ))
  }
  return tags
}, {})

module.exports = Safe
