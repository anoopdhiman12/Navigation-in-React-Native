import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
      }
    onPasswordChange(text){
      this.props.passwordChanged(text);
    }

      render() {
        return (
          <Card>
            <CardSection>
              <Input
                label="Email"
                placeholder="email@gmail.com"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
              />
            </CardSection>
                <CardSection>
                    <Input
                    secureTextEntry
                    label='Password'
                    placeholder='Password'
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                    />
                    </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                    </CardSection>
            </Card>   
        )
    }
}

const mapStateToProps = ({ auth }) => {
  const { email, password } = auth;

  return { email, password };
};
  
  export default connect(mapStateToProps, {
    emailChanged, passwordChanged
  })(LoginForm);