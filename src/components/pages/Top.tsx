import React, { Component } from 'react'
import M from 'materialize-css'
import ShopDisp from '../shop/ShopDisp';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


interface IState {
    pref:string;
    city:string;
    category:string;
    townSearch:JSX.Element[];
    searchWord:string;
    dispData:JSX.Element|null
}

export default class Top extends Component<{},IState> {
    constructor(props:any){
        super(props);
        this.state ={
            pref:'',
            city:'',
            category:"",
            townSearch:[],
            searchWord:'',
            dispData:null
        }
        this.gettown= this.gettown.bind(this)
        // this.onChagnehandle= this.onChagnehandle.bind(this)
        this.onChangeCity= this.onChangeCity.bind(this)
        this.onChangeCategory= this.onChangeCategory.bind(this)
        this.onChangeSearchWord= this.onChangeSearchWord.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReset = this.handleReset.bind(this)
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
    onChangeCategory(e:React.ChangeEvent<{ value: unknown }>){
        this.setState({
            category: e.target.value as string
        })
    }
    onChangeSearchWord(e:React.ChangeEvent<{ value: unknown }>){
        this.setState({
            searchWord: e.target.value as string
        })
    }
    handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        this.setState({
            dispData:<ShopDisp pref={this.state.pref} city={this.state.city} searchWord={this.state.searchWord} />
        })
    }
    handleReset=(e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        this.setState({
            pref:'',
            city:'',
            category:"",
            townSearch:[],
            searchWord:'',
            dispData:null
        })
    }

    render() {
        return (
            <div className='container'>
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
                        onChange={this.onChangeCategory}
                        >
                            <MenuItem value="1">和食</MenuItem>
                            <MenuItem value="2">中華</MenuItem>
                            <MenuItem value="3">イタリアン</MenuItem>
                            <MenuItem value="4">フレンチ</MenuItem>
                            <MenuItem value="5">居酒屋</MenuItem>
                            <MenuItem value="6">ラーメン</MenuItem>
                            <MenuItem value="7">定食</MenuItem>
                    </Select>
                </FormControl>
                <br/>
                <FormControl>
                    <TextField id="demo-simple-select-label" label="お店の名前で検索" 
                                            value={this.state.searchWord}
                                            onChange={this.onChangeSearchWord} />
                </FormControl>
                <div >
                    <Button variant="contained" style={{margin:"10px",backgroundColor:"green"}} color="primary" onClick={this.handleSubmit}>
                        検索
                    </Button>
                    <Button variant="contained" style={{margin:"10px",backgroundColor:"pink"}} color="secondary" onClick={this.handleReset}>
                        Reset
                    </Button>
                </div>
                {this.state.dispData}
            </div>
        )
    }
}
