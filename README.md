# react-interview-questions

1. The Virtual DOM

- The difference between Virtual DOM and 'real' DOM?

Virtual DOM:

- Can't directly update HTML.
- Acts as a copy of the reak DOM, which can be frequently manipulated and updated without a page refresh.
- More of a pattern than a specific technology.
- Synced with the real DOM with 'react-dom.

'Real' DOM:

- Directly updated and manipulates HTML.
- Creates a new DOM/full repaint if it is updated.
- An object-based representation of an HTML document + an interface for manipulating that object.

!The key is diffing!

Shadow DOM is browser specific technology for specific elements that you can use for styling.

2. React Limitations

- React is a library, NOT a framework.
- It is large.
- Owned by Facebook.
- Documentation.

3. JSX

- Short for JavaScript XML
- Write JavaScirpt with an HTML-like template syntax
- Produces elements that represent objects

Componenet is a fanction that returns an element.
Element is a JavaScirpt object.
