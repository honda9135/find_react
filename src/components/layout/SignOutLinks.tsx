import React, { Component } from 'react'

export default class SignOutLinks extends Component {
    render() {
        return (
            <ul className="sidenav" id="mobile-demo">
                <li><a href="/signin" className='green-text'>ログイン</a></li>
                <li><a href="/signup" className='green-text'>サインアップ</a></li>
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

