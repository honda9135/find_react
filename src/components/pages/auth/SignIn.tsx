import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

interface IState {
    email:string;
    password:string;
}
interface IProps {
    signIn:Function;
    authError:any;
    auth:any;
}

class SignIn extends Component<IProps,IState> {
    constructor(props:any) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleChangeMail = this.handleChangeMail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChangeMail = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            email: e.currentTarget.value
        })
    }
    handleChangePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            password: e.currentTarget.value
        })
    }

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        this.props.signIn(this.state)
    }


    render() {
        const { authError, auth } = this.props;
        console.log(auth)

        // //ログインされていないかのチェック
        if (auth.emailVerified) return <Redirect to='/' />

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <div className="input-field">
                        <label htmlFor="email">メール</label>
                        <input type="email" id="email" onChange={this.handleChangeMail} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">パスワード</label>
                        <input type="password" id="password" onChange={this.handleChangePassword} />
                    </div>
                    <div className="input-field">
                        <button className="btn ">ログイン</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null} 
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state:any) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        signIn: (creds:any) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)