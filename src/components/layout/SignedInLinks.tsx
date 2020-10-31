import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

interface IProps {
    signOut:Function;
}
class SignedInLinks extends Component<IProps,{}> {
    render() {
        return (
            <ul className="sidenav" id="mobile-demo">
                <li><a href="/" className='green-text' onClick={() =>{this.props.signOut()}} >ログアウト</a></li>
                <li><a href="/" className='green-text'>マイページ</a></li>
                <li><a href="/" className='green-text'>マイショップ</a></li>
                <li><a href="/contact" className='green-text'>お問い合わせ</a></li>
                {/* <li><a href="/">お気に入り</a></li> */}
                <hr/>
                <li><a href="/" className='red-text'>ご利用畳の注意</a></li>
                <li><a href="/" className='red-text'>利用規約</a></li>
                <li><a href="/" className='red-text'>免責事項</a></li>
                <hr/>
            </ul>
        )
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);