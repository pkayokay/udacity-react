// Why React?

// 1. Composition: combine simple function to build more complex ones.
// Use the same intuition when creating functions when creating React Components
// But instead of the function taking an argument and returning a value, it will take an argument and return a UI.
// Simple functions combined to create another function

  // In the code below, the first two functions are composed in the third function
  // These two functions should DOT (do one thing)!
  // Our composed function will return an object with data

    function getProfilePic(username) {
      return 'https://github.com/' + username + '.png?size=200';
    }

    function getProfileLink(username) {
      return 'https://github.com/' + username;
    }

    function getProfileData(username) {
      return {
        pic: getProfilePic(username),
        link: getProfileData(username)
      };
    }

    getProfileData('pkayokay');


  // Now let's do the same thing but return a UI.

  function ProfilePic(username) {
    return (
      <img alt={username} src={'https://github.com/' + username + '.png?size=200'} />
    )
  }

  funciton ProfileLink(username) {
    return <a href={'https://github.com/' + username}> {username} </a>
  }

  function Profile(username) {
    return (
      <div className='profile'>
        <Profilepic username='username' />
        <ProfileLink username='username' />
      </div>
    )
  }
