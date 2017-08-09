Props: allow you to pass data into components

Functional components: alternative way to create components

Controlled components: allow you to hook up the forms in your application to your component state


class User extends React.Component {
  render() {
    return (
      <p> Username: {this.props.username} </p>
    )
  }
}

<User username='Tyler' friend={true} />

// any attributes added to a component, is accessible in the props image inside of that component.




// Stateless functional components

class Email extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
};
//

const Email = (props) => (
  <div>
    {props.text}
  </div>
);

https://www.reactenlightenment.com/react-state/8.4.html