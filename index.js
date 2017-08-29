let htmlTags = require("html-tags")

let omit = (keys, obj) => {
  // let obj2 = {}
  // for (let key of Object.keys(obj)) {
  //   if (!keys.includes(key)) {
  //     obj2[key] = obj[key]
  //   }
  // }
  // return obj2

  return Object.keys(obj).reduce((obj2, key) => {
    return keys.includes(key)
      ? obj2
      : Object.assign(obj2, {[key]: obj[key]})
  }, {})
}

console.log(
  omit(["children"], {children: "foo", parents: "bar"})
)

// let Safe = htmlTags.reduce((tags, tag) => {
//   tags[tag] = (props) => {
//     let children = props.children
//     delete props.children
//     return React.createElement(tag, Object.assign(
//       omit(["children"], props),
//       {dangerouslySetInnerHTML: {__html: props.children}}
//     ))
//   }
//   return tags
// }, {})
//
// module.exports = Safe
