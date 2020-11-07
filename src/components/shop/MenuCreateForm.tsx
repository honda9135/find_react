import React, { Component } from 'react'

interface IState {
    name: string;
    price:number;
    image:string;
    category:string;
    errtext:string
}


export default class MenuCreateForm extends Component<{},IState>{
    constructor(props:any) {
        super(props)
        this.state = {
            name: '',         //メニューの名前
            price: 0,         //値段
            image:'',         //画像の場所
            category:'',      //カテゴリー
            errtext:''
        }
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangePrice = this.handleChangePrice.bind(this)
        this.handleChangeImage = this.handleChangeImage.bind(this)
        this.handleChangeCategory = this.handleChangeCategory.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: e.currentTarget.value
        })
    }
    handleChangePrice = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            price: Number(e.currentTarget.value)
        })
    }
    handleChangeImage = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            image: e.currentTarget.value
        })
    }
    handleChangeCategory = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            category: e.currentTarget.value
        })
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        var new_errtext = ''
        if(this.state.name===""){
            new_errtext += 'メニューの名前を入力してください。¥n'
        }
        if(this.state.category===""){
            new_errtext += 'カテゴリーの入力してください。¥n'
        }
        if(new_errtext===""){
            const MenuInfo = {
                name: this.state.name,        //名前
                phone: this.state.price,      //値段
                image: this.state.image,       //画像のパス
            }
            console.log(MenuInfo)
            alert('メニューを追加します。')
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
                        <label htmlFor="name">追加するメニューの名前</label>
                        <input type="text" id="name" value={this.state.name} onChange={this.handleChangeName} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="price" >値段</label>
                        <input type="number" id="price" value={this.state.price} onChange={this.handleChangePrice} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="category" >カテゴリー</label>
                        <input type="text" id="category" value={this.state.category} onChange={this.handleChangeCategory} />
                    </div>
                    <div>
                        <label htmlFor="img">追加メニューの画像</label><br/>
                        <input type="file" id="img" value={this.state.image} onChange={this.handleChangeImage}/>
                    </div>
                    {this.state.errtext==="" ? null : <p className='red-text'>{this.state.errtext}</p>}
                    <div className="input-field contactButton">
                        <button className="btn contactButton">追加</button>
                    </div>
                </form>
            </div>
        )
    }
}
