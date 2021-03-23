import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreators } from './store'

class Login extends PureComponent {
    render(){
        const {loginState} =this.props;
        if(!loginState) {return(
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder = '帳號' type="text" ref = {(input) => {this.account = input}}/>
                    <Input placeholder = '密碼' type="password" ref = {(input) => {this.password = input}} />
                    <Button onClick={() => this.props.login(this.account, this.password)}>登陸</Button>
                </LoginBox>
            </LoginWrapper>
        )}else{
            return <Redirect to='/' />
        }
    }
}
const mapState = (state) => ({
    loginState: state.getIn(['login', 'login'])
})
const mapDispatch = (dispatch) => ({
    login(accountElm, passwordElm){
        dispatch(actionCreators.login(accountElm, passwordElm))
    }
})

export default connect(mapState, mapDispatch)(Login);