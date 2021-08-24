# Higher Order Components Example

A higher order component is a pattern where a function takes a component as an argument and returns a new component.

A simple example: `const NewComponent = higherOrderComponent(originalComponent);`

Normal naming convention: `const WithFeature = WrappedComponent(OrignalComponent);`

So my export statement in my components looks like this: `export default withCounter(ClickCounter);`

Notice how the HOC starts with a lowercase letter. Doing it this way distinguishes it from regular components and because it reads out as ClickCounter withCounter anyone that reads your code will immediately know this component is providing the OriginalComponent it wraps with some sort of feature. 

Side Note: a HOC doesn’t modify the input component, nor does it use inheritance to copy its behavior. Rather, a HOC composes the original component by wrapping it in a container component. A HOC is a pure function with zero side-effects.

However, there are a few things to keep in mind. First of all it's very important to remember that in my example both `ClickCounter` and `HoverCounter` receive separate state. Incrementing the count in `ClickCounter` will not affect the count in `HoverCounter`.

A very common problem when people first start using HOC's they mistake of not passing down the props in their higher order component. In other words if I were to pass down my name to `ClickCounter` as a prop from my `App.js`, the HOC will receive the prop not `ClickCounter`. That is why it's crucial to remember to do `{...this.props}` in your HOC.

The last thing I wanted to mention is about passing down parameters to your HOC. In my example by passing incrementCount in the parameter of my HOC, I turned my HOC into a component that not only provides the components it wraps with the ability to increment, but it also allows each component to decide how much they will increment by. So that's just something to keep in mind that you can with HOC's.
