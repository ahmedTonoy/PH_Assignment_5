# JavaScript DOM & Event Concepts

## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById is used to get a single and specific DOM element by using its #Id. getElementsByClassName retuns HTMLCollection as an array-like object of multiple elements having a certain class name. querySelector return only a single node having a specified selector. querySelectorAll returns NodeList as an array-like object of multiple elements having certain selector.

## How do you create and insert a new element into the DOM?

I can use createElement() method to create element and then use appendChild() method to insert the created element into the DOM.

## What is Event Bubbling and how does it work?

If there is such a structure where there is element within its parent element and so on, then triggering any event to any specific element will rise above from the target element up to all ancestor parent elemets. This fact is known as event bubbling.

## What is Event Delegation in JavaScript? Why is it useful?

Event delegation is the technique of adding event listener only to a parent element instead of inserting to indiviual child elements. It is useful to manage events of all descendants directly from parent element.

## What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() is used to prevent the default behavior triggered by any event and stopPropagation() is used to stop the bubbling up of the triggered event from the target element towards its ancestors.
