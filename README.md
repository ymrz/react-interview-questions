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
