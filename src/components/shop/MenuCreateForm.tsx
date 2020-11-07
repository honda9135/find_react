import React, { Component } from 'react'
import firebase from '../../config/fbConfig'
import {createMenu} from '../../store/actions/menuAction'
import { connect } from 'react-redux'

interface IState {
    name: string;
    price:number;
    image:File|null;
    category:string;
    errtext:string
}
interface IProps {
    createMenu:Function;
    id:string
}


class MenuCreateForm extends Component<IProps,IState>{
    constructor(props:any) {
        super(props)
        this.state = {
            name: '',         //メニューの名前
            price: 0,         //値段
            image:null,         //画像の場所
            category:'',      //カテゴリー
            errtext:''
        }
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangePrice = this.handleChangePrice.bind(this)
        this.handleChangeImage = this.handleChangeImage.bind(this)
        this.handleChangeCategory = this.handleChangeCategory.bind(this)
        this.registFireStorage = this.registFireStorage.bind(this)        
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
        if(e.target.files===null){
            return
        }
        console.log(e.target.files)
        this.setState({
            image: e.target.files[0] 
        })
    }
    handleChangeCategory = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            category: e.currentTarget.value
        })
    }
    registFireStorage(file:File){
        let storageRef = firebase.storage().ref().child(file.name);
        storageRef.put(file)
        .then(function(snapshot) {
            alert("画像をストレージに保存しました");
        }).then(() =>{
            storageRef.getDownloadURL().then(imageUrl => {
                console.log(imageUrl,"imageUrl")
            })
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
        if(this.state.image===null){
            new_errtext += "画像を入力してください"
        }
        if(new_errtext===""&&this.state.image!==null){
            const MenuInfo = {
                id:this.props.id,
                name: this.state.name,        //名前
                price: this.state.price,      //値段
                category:this.state.category,
                image: this.state.image,       //画像のパス
            }
            console.log(MenuInfo)
            this.props.createMenu(MenuInfo)
            this.registFireStorage(this.state.image)
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
                        <input type="number"  min="0" id="price" value={this.state.price} onChange={this.handleChangePrice} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="category" >カテゴリー</label>
                        <input type="text" id="category" value={this.state.category} onChange={this.handleChangeCategory} />
                    </div>
                    <div>
                        <label htmlFor="img">追加メニューの画像</label><br/>
                        {this.state.image!==null
                        ?
                        <input type="file" id="img"  onChange={this.handleChangeImage}/>
                        :
                        <input type="file" id="img" onChange={this.handleChangeImage}/>
                        }
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

const mapDispatchToProps = (dispatch:any) => {
    return {
        createMenu: (menu:any) => dispatch(createMenu(menu))
    }
}

export default connect(null, mapDispatchToProps)(MenuCreateForm)