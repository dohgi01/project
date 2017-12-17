import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

import './css/Login.css';


class Login extends Component {

    constructor(){
        super();
        
        this.state = { 
            username : '',
            userpass : ''
        }
        
        this.handleUserName=this.handleUserName.bind(this);
        this.handleUserPass=this.handleUserPass.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        
    }
    
    handleUserName(e){
        this.setState({ username : e.target.value});
    }
    handleUserPass(e){
        this.setState({ userpass : e.target.value});
    }
    
    handleSubmit(){
        // 데이터가 보내진다.
        axios.post('http://localhost:4000/login', { 
            username : this.state.username, userpass : this.state.userpass})
        .then((response)=>{ // 그러고나서 응답한다
//            console.log(response.data); //cmd console 로그에 응답한 데이터를 보여준다
            let { success, error } = response.data;
            let { history } = this.props;
            
            if( success === 1){ // 로그인 성공
                history.push('/company'); // push : 다음순서로 밀어넣는다. company로.
            } else if(success === 2) {
                history.push('/register');
            } else if(error === -1){ // 에러... success === -1 는 안됨.
                return;
            }
        })
    }
    
    render(){
        return(
            <div className="login-bg">
                <div className="login">
                      <Form>
                        <Form.Field>
                          <label>User Name </label>
                          <input placeholder='User Name' onChange={this.handleUserName}/>
                        </Form.Field>
                        <Form.Field>
                          <label>User Password</label>
                          <input placeholder='User Password'  onChange={this.handleUserPass} />
                        </Form.Field>
                        <Button type='submit' onClick={this.handleSubmit} >Login</Button>
                      </Form>

                </div>
            </div>
        )
    }
}

export default Login;