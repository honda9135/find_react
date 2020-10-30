import React, { Component } from 'react'
interface IState {
    name: string;
    phone:string;
    mail:string;
    content:string;
    errtext:string;
}


export default class Contact extends Component<{},IState>{
    constructor(props:any) {
        super(props)
        this.state = {
            name: '',         //お問い合わせの名前
            phone: '',         //電話番号
            mail:'',            //メールアドレス
            content: '',         //問い合わせ内容
            errtext: '',         //エラー文
        }
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangePhone = this.handleChangePhone.bind(this)
        this.handleChangeMail = this.handleChangeMail.bind(this)
        this.handleChangeContent = this.handleChangeContent.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: e.currentTarget.value
        })
    }
    handleChangePhone = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            phone: e.currentTarget.value
        })
    }
    handleChangeMail = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            mail: e.currentTarget.value
        })
    }
    handleChangeContent = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            content: e.currentTarget.value
        })
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        var new_errtext = ''
        if(this.state.name===""){
            new_errtext += 'お名前を入力してください。'
        }
        if(this.state.phone===""&&this.state.mail===""){
            new_errtext += '電話番号もしくはメールアドレスを入力してください。'
        }
        if(new_errtext===""){
            const contactInfo = {
                name: this.state.name,       //名前
                phone: this.state.phone,      //電話番号
                mail: this.state.mail,         //メールアドレス
                content: this.state.content,   //問い合わせ内容
            }
            console.log(contactInfo)
            alert('問い合わせを送信しました。内容を確認の上連絡させていただきます。')
        }else{
            this.setState({
                errtext:new_errtext
            })
        }
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <div className="input-field">
                        <label htmlFor="name">お名前</label>
                        <input type="text" id="name" value={this.state.name} onChange={this.handleChangeName} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="phone" >電話番号</label>
                        <input type="tel" id="phone" value={this.state.phone} onChange={this.handleChangePhone} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="mail" >メールアドレス</label>
                        <input type="email" id="mail" value={this.state.mail} onChange={this.handleChangeMail} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content" >お問い合わせ内容</label>
                        <textarea id="content" className="materialize-textarea" value={this.state.content} onChange={this.handleChangeContent}></textarea>
                    </div>
                    {this.state.errtext==="" ? null : <p className='red-text'>{this.state.errtext}</p>}
                    <div className="input-field contactButton">
                        <button className="btn contactButton">問い合わせ</button>
                    </div>
                </form>
            </div>
        )
    }
}
