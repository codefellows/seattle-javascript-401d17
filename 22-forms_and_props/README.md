![cf](http://i.imgur.com/7v5ASc8.png) 22: Forms and Props
===

## Learning Objectives
* students will be able to manage controlled inputs
* students will learn to pass data from parent components to child components through the use of `props`

## Readings
* read [components and props](https://facebook.github.io/react/docs/components-and-props.html)
* read [state and lifecycle](https://facebook.github.io/react/docs/state-and-lifecycle.html)
* read [handling events](https://facebook.github.io/react/docs/handling-events.html)
* read [forms](https://facebook.github.io/react/docs/forms.html)

## Overview
#### Forms and Inputs
* react form elements maintain internal state
* think of react inputs as stateful child components
  * we manage the state of inputs through our own stateful component and one way data binding
* in the case of our app, we'll create a parent component referred to as _form-container_
  * this manages the state for all child components of the form
  * this also passes any necessary state down into inputs through `props`
  * each input has an `onChange` event that we use to update our _form-container's_ state each time the user interacts with an input

#### Props
* components accept arbitrary inputs called `props`
* in jsx, props are passed into a component with a syntax that looks like html attributes
* `props` is the name of the object passed into a component constructor
  * any prop added to a component in the jsx will be accessible as a property on `props`
  * after `props` is passed into the constructor's `super` they are available on the context by using `this.props`
  * **important note:** `props` are READ ONLY

``` javascript
// props is the argument passed to the constructor
// props can be accessed on `this` after being passed into super
class Foo extends React.Component {
  constructor(props){
    super(props)
    console.log('title', props.title)
    console.log('content', props.content)
  }
  render(){
    return (
      <div>
        <h1> {this.props.title} </h1>
        <p> {this.props.content} </p>
      </div>
    )
  }
}

// adding props to a component
<Foo title='some literal value value' content={this.state.article.content}>
```

#### One Way Data Flow
* state can only be passed from parent to child through `props`
  * this enforces the idea of one way data flow
* one way data flow means that state can only be passed down the component tree (not up)
* if a child wants to pass some data to its parent, the parent can pass a function to the child through `props` and the child may invoke that function and pass it data for the parent to manage
