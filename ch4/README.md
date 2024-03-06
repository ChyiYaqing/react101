## Chapter 4: Props and States
> Props and states are used to pass data inside React components.

Note that if you pass anything other than a string as a prop value, you need to put the value in curly brackets(number, functions,arrays,objects,and so on)

This is because JavaScript expressions can't be processed by JSX unless you put the expression inside curly brackets.

### Props are Immutable
> React props can't be changed once you declare them.


### State in React
> In React, states are arbitrary data that you can declare and manage in your components.

The `useState` hook is a function that enables you to put value into the state mechanism.

When calling the `useState()` function, you can pass an argument that will serve as the initial value of the state.The function then returns an array with two elements. The first element holds the state value, and the second element is a function that allows you to change the state value.

### How to Pass State to a Child Component


### How to Use React DevTools to Inspect States and Props
> To help ease your development, you can install the React Developer Tools (DevTools for short) to inspect the current state and props value of your components.
