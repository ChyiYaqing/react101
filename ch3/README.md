## Chapter 3: Making Sense of JSX

> In the previous chapter, you learned that a component must always have a `return` statement that contains elements to render on the screen:

```
function App() {
  return <h1>Hello World</h1>
}
```

The tag `<h1>` looks like a regular HTML tag, but it's actually a special template language included in React called JSX.

JSX is a syntax extension that produces JavaScript powered HTML elements. It can be assigned to JavaScript variables and can be returned from function calls.

```
function App() {
  const myElement = <h1>Hello World</h1>
  return myElement
}
```

You can also embed JavaScript expressions inside an element by using curly brackets `{}`.

```
const lowercaseClass = 'text-lowercase';
const text = 'Hello World!';
const App = <h1 className={lowercaseClass}>{text}</h1>
```

### How to Render a List Using JSX

