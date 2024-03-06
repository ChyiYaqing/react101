## Chapter 9: Network Requests in React

> Modern web applications tend to have a modular architecture, where the back end is separated from the front end. The front end app will need to send an HTTP network request to a remote endpoint.

React doesn't tell you how you should send network requests. The library only focuses on rendering UI with data management using props and states.

To fetch data using React, you can use any valid JavaScript library like Axios, Superagent, and even the native Fetch API.

### The useEffect Hook

> this hook allows you to run some code after rendering so that you can synchronize your component with some system outside of React.
