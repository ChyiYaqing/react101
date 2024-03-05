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
  npm install   # install the packages required by the application
  npm run dev   # start your application
```

`npm install`
> install the packages required by the application

`npm run dev`
> start your application

```
VITE v5.1.5  ready in 94 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

`npm run dev -- --host`
> If you want to start the development server and bind it to expose

```
*[main][~/chyi/github.com/react101/react-app]$ npm run dev -- --host

react-app@0.0.0 dev
vite --host


VITE v5.1.5  ready in 86 ms

➜  Local:   http://localhost:5173/
➜  Network: http://10.2.67.249:5173/
➜  Network: http://192.168.100.13:5173/
➜  Network: http://169.254.8.94:5173/
➜  press h + enter to show help
```

Now you can view the running application from the browser.
![react run dev](/imgs/react-run-dev.png)
