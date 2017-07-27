// .createElement()

const element = React.createLement('div', null, 'hello world');
// element holds a Javascript object!
ReactDOM.render(
  element,
  document.getElementById('root')
)
<div id='root'></div>

// We can add properties in place of null.
// Ex. ('div', className: 'myclass', 'hello world');

// When we create an element in react, we create an object that describes the real DOM.an
// This is the VirtualDOM. But nothing gets created until we run the render method.



React.createElement( type, props, content);

type: string or React Component (HTML tag)
props: null or an object (object of HTML attributes and custom data about the element)
content: null, string, React Element, or React Component


// Nesting
const element = React.createElement('div', null,
  React.createElement('strong', null, 'Hello world!')
);


// 
const element = React.createElement('ol', null,
  React.createElement('li', null, 'Michael'),
  React.createElement('li', null, 'Ryan'),
  React.createElement('li', null, 'Tyler')
)

ReactDOM.render(
  element,
  document.getElementById('root')
)
<div id='root'></div>


// refactor
const people = [
  { name: 'Michael'},
  { name: 'Ryan'},
  { name: 'Tyler'}
]

const element = React.createElement('ol',null,
  people.map(person => (
    React.createElement('li', null, person.name)
  ))
)

ReactDOM.render(
  element,
  document.getElementById('root')
)
// Creating elements like this could be tidious, so let's find a way to make this easier
// We can use JSX, a syntax extension of JavaScript that let's us write JavaScript code that looks a bit like HTML

// refactor with JSX
const people = [
  { name: 'Michael'},
  { name: 'Ryan'},
  { name: 'Tyler'}
]

const element = <ol>
  {people.map(person => (
    <li key={person.name}>{person.name}</li>
  ))}
  </ol>

ReactDOM.render(
  element,
  document.getElementById('root')
)
<div id='root'></div>


// JSX comparison

const greeting = (
  <div className='greeting'>
    <h2>Hello World!</h2>
  </div>
);

const greeting = React.createElement('div',{className: 'greeting'}, React.createElement('h2',{},'Hello world')));

// JSX returns ONE root element
const message = (
  <div>
    <h1>All About JSX:</h1>
    <ul>
      <li>JSX</li>
      <li>is</li>
      <li>awesome!</li>
    </ul>
  </div>
);

// Not this 
// Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag
const message = (
  <h1>All About JSX:</h1>
  <ul>
    <li>JSX</li>
    <li>is</li>
    <li>awesome!</li>
  </ul>
);

// Components

class ContactList extends React.Component {
  render() {
    const people = [
      { name: 'Michael'}
      { name: 'Ryan'}
      { name: 'Tyler'}
    ]

    return (
      <ol>
        {people.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ol>
    )
  }
}

ReactDOM.render(
  <ContactList/>,
  document.getElementById('root')
)

// When building with react, think in components. Durable and reusable componen classes that do one thing. If it manages multiple tasks, refactoring shoulbe considered.