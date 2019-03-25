# React Safe

This package provides a syntactic sugar over the raw `dangerousSetInnerHTML`.

## Motivation

In real projects, at least in my experience, the usage of `dangerousSetInnerHTML` is extensive.
Which brings two problems:

1. It's too long and ugly for its frequency. Also JSX does not look like HTML anymore as tag contents
are passed via attributes. Which kinda defeats the usage point of JSX.

2. The term "dangerous" is misleading. It represents something a programmer considers safe(!)
instead. So it kinda spams the vision with irrelevant signals of *false danger* decreasing the
capability to notice real threats.

## Examples

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

## A warning

The programmer must understand that using this package does not relieve him of the need to check 
the data transmitted as children for the presence of a code that can be used to conduct an XSS attack.

## License

MIT
