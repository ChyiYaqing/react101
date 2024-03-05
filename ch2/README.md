## Chapter 2: How to Create React Components

In React, a component is a single independent unit of user interface(UI).

All React components are saved under the `.jsx` file extension. 

What is JSX? It's an extension of JavaScript that produces JavaScript-powered HTML elements.


### How to Return Multiple Elements With Fragments
> A component must always return a single element. When you need to return multiple elements, you need to wrap all of them in a single element like a `<div>`.

Using Fragment in place of <div>
```
function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <h2>Learning to code with React</h2>
    </>
  )
}

export default App
```

The empty tag `<>` is a React feature called a Fragment.

### How to Render to the Screen
> To render a React component into the browser, you need to create a root React component using the ReactDOM library.

### How to Write Comments in React
> Writing comments in React component is similar to how you comment in regular JavaScript code.
> You can use the double forward slash syntax `//` to comment any code.
> You need to use the curly brackets, forward slash, and asterisk format `{/* comment here */}` inside the `return` statement.

### How to Compose Multiple Components as One



