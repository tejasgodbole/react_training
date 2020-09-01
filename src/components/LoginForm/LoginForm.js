import React from 'react'
import { render } from '@testing-library/react'

class LoginForm extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            typingIn: '',
        }
    }

    emailHandler = (e) => {
        this.setState({typingIn: e.target.placeholder})
    }

    submitLoginForm() {
        
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <input value={this.props.email} onBlur={() => this.setState({typingIn: ''})} onChange={this.emailHandler} type='text' placeholder='Email'/>
                    <br /> <br />
                    <input  onBlur={() => this.setState({typingIn: ''})} onChange={this.emailHandler} type='password' placeholder='Password'/>
                    <br /> <br />
                    <button onClick={this.submitLoginForm}>Login</button>
                    { this.state.typingIn 
                        &&
                    <p>You are typing inside {this.state.typingIn}</p> }
                    
                </form>
            </div>
        )
    }
}

export default LoginForm
