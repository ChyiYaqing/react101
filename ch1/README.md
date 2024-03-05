## Chapter 1: Introduction

React was initially developed by Facebook as a solution to front end problems they were facing:

* DOM manipulation is an expensive operation and should be minimized.
* No library specialized in handling front-end development at the time.
* Using a lot of vanilla JavaScript can turn a web application into a mess that's hard to maintain.

### Computer Setup

To start programming with React, you'll need to have three things:

* 1. A web browser
* 2. A code editor
* 3. Node.js


#### Node.js
> Node.js is a JavaScript runtime application that enables you ro run JavaScript outside of the browser.

To check if Node has been properly installed.
```
[~]$ node -v
v18.18.2
```

#### Your First React Application

* First, create a folder on your computer that will be used to store all files related to this book.

* Second, open your terminal and run the npm command to create a new React application using Vite(vite is a build tool that you can use to bootstrap a new React project.).

```
*[master][~/chyi/github.com/react101]$ npm create vite react-app -- --template react
Need to install the following packages:
create-vite@5.2.1
Ok to proceed? (y) y

Scaffolding project in /Users/chyiyaqing/chyi/github.com/react101/react-app...

Done. Now run:

  cd react-app
  npm install
  npm run dev

  npm notice
  npm notice New major version of npm available! 9.8.1 -> 10.5.0
  npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.5.0
  npm notice Run npm install -g npm@10.5.0 to update!
  npm notice

```
