# React Safe

This package provides a syntactic sugar over `dangerousSetInnerHTML` technique. The latter is used
much more often than its intentionally ugly name and syntax imply. At least in my experience.

### Examples

#### React (vanilla)

```jsx
<h1 dangerouslySetInnerHTML={{__html: page.title}}></h1>
<div dangerouslySetInnerHTML={{__html: renderMD(page.body)}}></div>
```

#### React Safe

```jsx
<Safe.h1>{page.title}</Safe.h1>
<Safe.div>{renderMD(page.body)}</Safe.div>
```
