import React from "react"
import htmlTags from "html-tags"

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
  tags[tag] = class Tag extends React.Component {
    render() {
      let {props} = this
      return React.createElement(tag, Object.assign(
        omit(["children"], props),
        {dangerouslySetInnerHTML: {__html: props.children}}
      ))
    }
  }
  return tags
}, {})

export default Safe
