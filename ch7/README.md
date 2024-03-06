## Chapter 7: CSS in React

There are 4 common ways you can add CSS in a React application:

1. Inline styling
2. CSS files
3. CSS modules
4. Tailwind CSS

### React Inline Styling

JSX that inline style must be written as an object instead of a string.

```
function App() {
  return (
    <h1 style={{ color: 'red'  }}>Hello World</h1>
  );
}
```

In the style attribute above, the first set of curly brackets is used to write JavaScript expressions. The second set of curly brackets initializes a JavaScript object.

### CSS Files
> Vite already knows how to handle a `.css` file.

### CSS Modules

Using CSS Modules ensures that your CSS classes are scoped locally, preventing CSS rules from colliding with each other.

Another advantage of using CSS Modules is that you can compose a new class by inheriting from other classes that you've written.

### Tailwind CSS
> Tailwind CSS is a modern utility-first CSS framework that allows you to style elements by combining a bunch of classes together.

### Which One Should You Use?

It depends on the method you feel comfortable with the most. It you're working with a team, you need to discuss and agree on the method you want to apply, because mixing the styles make it hard to develop and maintain the application.

Remember: Always use only one way to style React components in a specific to avoid confusion.
