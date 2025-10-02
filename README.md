1. JSX
What it is: JavaScript XML. It's a mix of HTML and JavaScript.

Why use it: It lets you write familiar, easy-to-read HTML tags right inside your JavaScript code. It makes building the user interface (UI) much simpler.

2.
State:

Internal memory of a component.

The data changes over time ( a counter going up, or a menu opening/closing).

It is managed inside the component.

Props (Properties):

Like arguments passed to a function.

Data passed from a parent component down to a child component.

It is read-only (the child component cannot change it).


3.

What it is the useState Hook: A special function that gives a functional component the ability to have State (internal memory).

How it works:

You call it: const [count, setCount] = useState(0);

It gives you two things: the current value (count) and a function to update it (setCount).

When you call the update function (setCount), React re-renders the component with the new value.

4.
 Sharing State Between Components
The Simple Way (Lifting State Up):

You can't pass state sideways.

You move the state from the individual components up to their closest shared parent.

The parent then passes the data and the update function down to the children as Props.

5. Event Handling
How it works:

It's like adding an onclick to an HTML element, but in React, you use camelCase (e.g., onClick, onChange).

You pass a JavaScript function directly into the event attribute.

Example:

JavaScript
const myClickFunction = () => {}; 
    <button onClick={myClickFunction}>Click Me</button>
