import React, { Component } from 'react'
import M from 'materialize-css'

interface IState {
    auth: boolean;
    pref:string;
    town:string;
    townSearch:JSX.Element[];
    storeName:string
}

export default class SearchBox extends Component<{},IState> {
    constructor(props:any){
        super(props);
        this.state ={
            auth:true,
            pref:'',
            town:'',
            townSearch:[],
            storeName:''
        }
        this.gettown= this.gettown.bind(this)
        this.onChagnehandle= this.onChagnehandle.bind(this)
    }
    componentDidMount(){
        M.AutoInit()
    }

    componentDidUpdate(){
        M.AutoInit()
    }

    async gettown(prefid:string){
        let listdata:any[] = []
        let openApiUrl:string = 'https://www.land.mlit.go.jp/webland/api/CitySearch?area='+prefid;
        await  fetch(openApiUrl)
            .then(response => response.json())
            .then((data) => {
                data.data.forEach((element:any) => {
                    listdata.push(<option value={element.id}>{element.name}</option>)
                });
            }).catch((err) => {
                alert(err)
            });
        this.setState({
            townSearch:listdata
        })
    }

    onChagnehandle(event: React.FormEvent<HTMLSelectElement>){
        this.gettown(event.currentTarget.value)
    }

    render() {
        return (
            <div className='container'>
                <div className="col　s6 m6">
                    <select onChange={this.onChagnehandle}>
                        <option value="" disabled selected>県を選択してください</option>
                        <option value="01">北海道</option>
                        <option value="02">青森県</option>
                        <option value="03">岩手県</option>
                        <option value="04">宮城県</option>
                        <option value="05">秋田県</option>
                        <option value="06">山形県</option>
                        <option value="07">福島県</option>
                        <option value="08">茨城県</option>
                        <option value="09">栃木県</option>
                        <option value="10">群馬県</option>
                        <option value="11">埼玉県</option>
                        <option value="12">千葉県</option>
                        <option value="13">東京都</option>
                        <option value="14">神奈川県</option>
                        <option value="15">新潟県</option>
                        <option value="16">富山県</option>
                        <option value="17">石川県</option>
                        <option value="18">福井県</option>
                        <option value="19">山梨県</option>
                        <option value="20">長野県</option>
                        <option value="21">岐阜県</option>
                        <option value="22">静岡県</option>
                        <option value="23">愛知県</option>
                        <option value="24">三重県</option>
                        <option value="25">滋賀県</option>
                        <option value="26">京都府</option>
                        <option value="27">大阪府</option>
                        <option value="28">兵庫県</option>
                        <option value="29">奈良県</option>
                        <option value="30">和歌山県</option>
                        <option value="31">鳥取県</option>
                        <option value="32">島根県</option>
                        <option value="33">岡山県</option>
                        <option value="34">広島県</option>
                        <option value="35">山口県</option>
                        <option value="36">徳島県</option>
                        <option value="37">香川県</option>
                        <option value="38">愛媛県</option>
                        <option value="39">高知県</option>
                        <option value="40">福岡県</option>
                        <option value="41">佐賀県</option>
                        <option value="42">長崎県</option>
                        <option value="43">熊本県</option>
                        <option value="44">大分県</option>
                        <option value="45">宮崎県</option>
                        <option value="46">鹿児島県</option>
                        <option value="47">沖縄県</option>
                    </select>
                </div>
                <div className="col　s6 m6">
                    <select>
                        <option value="" disabled selected>市町村を選んでください</option>
                        {this.state.townSearch}
                    </select>
                </div>
                <div className="col　s6 m6">
                    <select multiple>
                        <option value="" disabled selected>カテゴリー</option>
                        <option value="1">和食</option>
                        <option value="2">中華</option>
                        <option value="3">イタリアン</option>
                        <option value="4">フレンチ</option>
                        <option value="5">居酒屋</option>
                        <option value="6">ラーメン</option>
                        <option value="7">定食</option>
                    </select>
                </div>
                <div className="input-field col s12">
                    <input placeholder="お店の名前で検索" id="first_name" type="text" className="validate"/>
                </div>
                <button className='btn'>検索</button>
            </div>
        )
    }
}
