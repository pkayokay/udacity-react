// Components are the building blocks of React

// Main unit of encapsulation for React
// Breaks down UI into small pieces
// Let's us work in functionality of individual parts of the app without affecting the rest of it.

// Encourage us to build using COMPOSITION rather than inheritance

// Composition? What does it mean? 

class ContactList extends React.Component {
  render() {
    const people = this.props.contacts

    return <ol>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          {name: 'Paul'},
          {name: 'Ryan'}
        ]}/>
        <ContactList contacts={[
          {name: 'Joel'},
          {name: 'Gabe '}
        ]}/>
      </div>
    )
  }
}

// Favor composition over inheritance
// React.Component extends but no more than once. The UI components are independent, focused, and reusable.
