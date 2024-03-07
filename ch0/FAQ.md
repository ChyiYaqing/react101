## FAQ

---

### VITE vs CREATE-REACT-APP
> When it comes to building React applications, the two most popular options are VITE and Create-React-App(CRA).

#### What is create-react-app?
> CRA is a build tool that developers can use to spin up a React project quickly. Projects created using CRA come with pre-configuraed things such as basic file structing for websites and packages like Babel or Webpack, which work under the hood. CRA also provides a development server to run the website locally for faster and easier development.

```
$ npx create-react-app my-app
```

#### What is VITE?
> VITE is also a build tool, just like CRA. VITE aims to provide a faster and learner development experience for modern web projects. It has two major components.

- A development server with additional features over native ES6 modules like HMR (hot module reload).
- A build command that bundles your code

```
$ npm create vite react-app -- --template react
```

VITE can be used with various fronted frameworks and libraries like React, Vue, etc.

**Following are some areas where VITE is actually better than CRA during development:**

- Development speed

VITE is an ultra-fast development server when compared with CRA's decent development server.

- Performance

VITE is known for its optimized production builds, which result in faster loads.

VITE is best suited for small to medium projects, but CRA is recommended when working on larger projects.

In conclusion, both VITE and CRA are powerful tools for building React applications. Your choice should be cased on specific project needs.
