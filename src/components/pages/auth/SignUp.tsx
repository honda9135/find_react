import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../../store/actions/authActions'

interface IState {
    email:string;
    password:string;
    firstName:string;
    lastName:string;
}
interface IProps {
    signUp:Function;
    authError:any;
    auth:any;
}

class SignUp extends Component<IProps,IState> {
    constructor(props:any) {
        super(props)
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }
        this.handleChangeMail = this.handleChangeMail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
        this.handleChangeLastName = this.handleChangeLastName.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeMail(e:React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            email: e.currentTarget.value
        })
    }
    handleChangePassword(e:React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            password: e.currentTarget.value
        })
    }
    handleChangeFirstName(e:React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            firstName: e.currentTarget.value
        })
    }
    handleChangeLastName(e:React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            lastName: e.currentTarget.value
        })
    }

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        this.props.signUp(this.state);
        alert("確認メールを送信しました。メールを確認してください。")
    }

    render() {
        const { auth, authError } = this.props;

        //ログインされていないかチェック
        if (auth.emailVerified) return <Redirect to='/'/>
        
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <div className="input-field">
                        <label htmlFor="email">メールアドレス</label>
                        <input type="email" id="email" onChange={this.handleChangeMail} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">パスワード</label>
                        <input type="password" id="password" onChange={this.handleChangePassword} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">苗字</label>
                        <input type="text" id="firstName" onChange={this.handleChangeFirstName} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">名前</label>
                        <input type="text" id="lastName" onChange={this.handleChangeLastName} />
                    </div>
                    <div className="input-field">
                        <button className="btn ">サインアップ</button>
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
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        signUp: (newUser:any) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);