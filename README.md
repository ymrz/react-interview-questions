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

4. Props

Passing value from child to parent - pass a function prop.

Prop drilling - drilling props down in a bunch of components.

You CANNOT modify props, it is read only.
Functions are pure components.

5. State and Lifecycle

Props vs State - Props ans State are JavaSCript object. Props gets passed to the component. State is managed within a component.

Difference between state in a class component vs state in a function component:

Class: this.getState function. State is attached to the Class object. Something that persists.

Function: State recalled multiple times.

Component lifecycle:

- Mounting
  - render, componenetDidMount
- Updating
  - render, componenetDidUpdate
- Unmounting

  - componentWillUnmount

  Updating lifecycle in a functional component:

  - useEffect hook

  6. Effects

  What parameters useEffect takes:

  - a function (the return value is a clean-up function. Cleans up any event listeners)
  - an array

  It runs on mount, when things update.

  - [variable] -> Runs on mount and when variable changes
  - No array -> Runs on mount and on every state change.

  7. Refs

  The difference between refs and state variables:

  - objects that contain values.
  - State is something that can trigger a re-render.
  - Refs do not trigger re-render.

  Best time to use Refs:

  - Managing focus or media
  - Triggering animations
  - Intergrating with DOM libraries.

  Proper way to update a ref ina function componenet: You use an effect to do so.
