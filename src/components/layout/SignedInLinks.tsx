import React, { Component } from 'react'

export default class SignedInLinks extends Component {
    render() {
        return (
            <ul className="sidenav" id="mobile-demo">
                <li><a href="/" className='green-text'>ログアウト</a></li>
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