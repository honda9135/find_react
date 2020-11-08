import React, { Component } from 'react'
import firebase from '../../config/fbConfig'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

interface IState {
    name: string;
    image:File|null;
    category:string[];
    errtext:string;
    pref:string;
    city:string;
    townSearch:JSX.Element[];
}
interface IProps {
    id:string;
    closeModal:Function
}


export default class ShopCreateForm extends Component<IProps,IState>{
    constructor(props:any) {
        super(props)
        this.state = {
            name: '',         //メニューの名前
            image:null,         //画像の場所
            category:[],      //カテゴリー
            errtext:'',
            pref:"",
            city:"",
            townSearch:[]
        }
        this.gettown= this.gettown.bind(this)
        this.onChangeCity= this.onChangeCity.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeImage = this.handleChangeImage.bind(this)
        this.handleChangeCategory = this.handleChangeCategory.bind(this)
        this.registFireStorage = this.registFireStorage.bind(this)        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async gettown(prefid:string){
        let listdata:any[] = []
        let openApiUrl:string = 'https://www.land.mlit.go.jp/webland/api/CitySearch?area='+prefid;
        await  fetch(openApiUrl)
            .then(response => response.json())
            .then((data) => {
                data.data.forEach((element:any) => {
                    listdata.push(<MenuItem value={element.id}>{element.name}</MenuItem>)
                });
            }).catch((err) => {
                alert(err)
            });
        this.setState({
            townSearch:listdata
        })
    }

    onChangehandle = (event: React.ChangeEvent<{ value: unknown }>) => {
        this.gettown(event.target.value as string)
        this.setState({
            pref:event.target.value as string
        })
    };
    onChangeCity(e:React.ChangeEvent<{ value: unknown }>){
        this.setState({
            city: e.target.value as string
        })
    }

    handleChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: e.currentTarget.value
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
    handleChangeCategory = (e:React.ChangeEvent<{ value: unknown }>) => {
        this.setState({
            category: e.target.value as string[]
        })
    }
    registFireStorage(file:File){
        let storageRef = firebase.storage().ref().child(file.name);
        storageRef.put(file)
        .then(function(snapshot) {
            alert("画像をストレージに保存しました");
        }).then(() =>{
            storageRef.getDownloadURL().then(imageUrl => {
                const firestore = firebase.firestore();
                firestore.collection('shops').add({
                        name:this.state.name,
                        shop_image:imageUrl,
                        category:this.state.category,
                        pref:this.state.pref,
                        city:this.state.city,
                        menu:[],
                        user:this.props.id
                    })
                    .then(() =>{
                        this.props.closeModal()
                    })
                });
            })
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        var new_errtext = ''
        if(this.state.name===""){
            new_errtext += 'メニューの名前を入力してください。¥n'
        }
        if(this.state.category===[]){
            new_errtext += 'カテゴリーの入力してください。¥n'
        }
        if(this.state.image===null){
            new_errtext += "画像を入力してください"
        }
        if(new_errtext===""&&this.state.image!==null){
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
                                <FormControl style={{minWidth:120,margin: "3px"}}>
                    <InputLabel id="demo-simple-select-label">県を選択</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.pref}
                        onChange={this.onChangehandle}
                        >
                        <MenuItem value="01">北海道</MenuItem>
                        <MenuItem value="02">青森県</MenuItem>
                        <MenuItem value="03">岩手県</MenuItem>
                        <MenuItem value="04">宮城県</MenuItem>
                        <MenuItem value="05">秋田県</MenuItem>
                        <MenuItem value="06">山形県</MenuItem>
                        <MenuItem value="07">福島県</MenuItem>
                        <MenuItem value="08">茨城県</MenuItem>
                        <MenuItem value="09">栃木県</MenuItem>
                        <MenuItem value="10">群馬県</MenuItem>
                        <MenuItem value="11">埼玉県</MenuItem>
                        <MenuItem value="12">千葉県</MenuItem>
                        <MenuItem value="13">東京都</MenuItem>
                        <MenuItem value="14">神奈川県</MenuItem>
                        <MenuItem value="15">新潟県</MenuItem>
                        <MenuItem value="16">富山県</MenuItem>
                        <MenuItem value="17">石川県</MenuItem>
                        <MenuItem value="18">福井県</MenuItem>
                        <MenuItem value="19">山梨県</MenuItem>
                        <MenuItem value="20">長野県</MenuItem>
                        <MenuItem value="21">岐阜県</MenuItem>
                        <MenuItem value="22">静岡県</MenuItem>
                        <MenuItem value="23">愛知県</MenuItem>
                        <MenuItem value="24">三重県</MenuItem>
                        <MenuItem value="25">滋賀県</MenuItem>
                        <MenuItem value="26">京都府</MenuItem>
                        <MenuItem value="27">大阪府</MenuItem>
                        <MenuItem value="28">兵庫県</MenuItem>
                        <MenuItem value="29">奈良県</MenuItem>
                        <MenuItem value="30">和歌山県</MenuItem>
                        <MenuItem value="31">鳥取県</MenuItem>
                        <MenuItem value="32">島根県</MenuItem>
                        <MenuItem value="33">岡山県</MenuItem>
                        <MenuItem value="34">広島県</MenuItem>
                        <MenuItem value="35">山口県</MenuItem>
                        <MenuItem value="36">徳島県</MenuItem>
                        <MenuItem value="37">香川県</MenuItem>
                        <MenuItem value="38">愛媛県</MenuItem>
                        <MenuItem value="39">高知県</MenuItem>
                        <MenuItem value="40">福岡県</MenuItem>
                        <MenuItem value="41">佐賀県</MenuItem>
                        <MenuItem value="42">長崎県</MenuItem>
                        <MenuItem value="43">熊本県</MenuItem>
                        <MenuItem value="44">大分県</MenuItem>
                        <MenuItem value="45">宮崎県</MenuItem>
                        <MenuItem value="46">鹿児島県</MenuItem>
                        <MenuItem value="47">沖縄県</MenuItem>
                    </Select>
                </FormControl>
                <FormControl style={{minWidth:120,margin: "3px"}}>
                    <InputLabel id="demo-simple-select-label">地域を選択</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.city}
                        onChange={this.onChangeCity}
                        >
                            {this.state.townSearch}
                    </Select>
                </FormControl>
                <FormControl style={{minWidth:150,margin: "3px"}}>
                    <InputLabel id="demo-simple-select-label">カテゴリーを選択</InputLabel>
                    <Select 
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.category}
                        onChange={this.handleChangeCategory}
                        multiple
                        >
                            <MenuItem value="和食">和食</MenuItem>
                            <MenuItem value="中華">中華</MenuItem>
                            <MenuItem value="イタリアン">イタリアン</MenuItem>
                            <MenuItem value="フレンチ">フレンチ</MenuItem>
                            <MenuItem value="居酒屋">居酒屋</MenuItem>
                            <MenuItem value="ラーメン">ラーメン</MenuItem>
                            <MenuItem value="定食">定食</MenuItem>
                    </Select>
                </FormControl>
                <form onSubmit={this.handleSubmit} className="white">
                    <div className="input-field">
                        <label htmlFor="name">お店の名前</label>
                        <input type="text" id="name" value={this.state.name} onChange={this.handleChangeName} />
                    </div>
                    <div>
                        <label htmlFor="img">お店の画像</label><br/>
                        <input type="file" id="img"  onChange={this.handleChangeImage}/>
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