import React from 'react';
import Layout from './layout.jsx';
import UserHomePage from './UserHomePage.jsx';
import LoginPage from './LoginPage.jsx';

class App extends React.PureComponent {
  state= {
    isLoggedIn: localStorage.getItem('isLoggedIn') && true,
  };
  bc = new BroadcastChannel('dhawan_channel');

  componentDidMount() {
    window.addEventListener('storage', (e) => {
      if(e.key === 'isLoggedIn' && e.newValue==='true') {
        this.setState({
          isLoggedIn: true,
        })
      }
    });

    this.bc.onmessage =  (ev) => { 
      ev.data === 'loggedout' && this.setState({
        isLoggedIn: false,
      });
      ev.data === 'loggedin' && this.setState({
        isLoggedIn: true,
      });
    }
  }

  render() {
    return (
      <Layout>
        {this.state.isLoggedIn ? <UserHomePage /> : <LoginPage />}
      </Layout>
    );
  }
}

export default App;
