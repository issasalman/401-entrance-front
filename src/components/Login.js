import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import LoginButton from './LoginButton';

class Login extends React.Component {
  render() {
    return(
      <div style={{  textAlign: "center",  paddingLeft: "620px" }}>
      <Card style={{ width: '18rem'  }} >
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          <LoginButton />
        </Card.Body>
      </Card>
      </div>
    )
  }
}

export default Login;
