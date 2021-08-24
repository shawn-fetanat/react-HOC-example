# Higher Order Components Example

A higher order component is a pattern where a function takes a component as an argument and returns a new component.

A simple example: const NewComponent = higherOrderComponent(originalComponent);

Normal naming convention: const WithCounter = WrappedComponent(ClickCounter);

Side Note: a HOC doesn’t modify the input component, nor does it use inheritance to copy its behavior. Rather, a HOC composes the original component by wrapping it in a container component. A HOC is a pure function with zero side-effects.

However, there are a few things to keep in mind. First of all it's very important to remember that in my example both ClickCounter and HoverCounter receive separate state. Incrementing the count in ClickCounter will not affect the count in HoverCounter.

A very common problem when people first start using HOC's they mistake of not passing down the props in their higher order component. In other words if I were to pass down my name to ClickCounter as prop from my App.js the HOC is will get it not ClickCounter. That is why it's crucial to remember to do {...this.props} in your HOC.

The last thing I wanted to mention is about passing down parameters to your HOC. You want to make your HOC as generic AND dynamic as possible. In my example by passing incrementCount in the parameter of my HOC, I turned my HOC into something that not only increments the count in both my components without having to repeat code but also allows each component to decide how much they will increment by. That's what I mean by dynamic.
