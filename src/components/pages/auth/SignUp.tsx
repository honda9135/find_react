import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../../store/actions/authActions'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

interface IState {
    email:string;
    password:string;
    firstName:string;
    lastName:string;
    pref:string;
    city:string;
    townSearch:string[];
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
            lastName: '',
            pref:"",
            city:"",
            townSearch:[]
        }
        this.handleChangeMail = this.handleChangeMail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
        this.handleChangeLastName = this.handleChangeLastName.bind(this)
        this.gettown= this.gettown.bind(this)
        this.onChangeCity= this.onChangeCity.bind(this)
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
        authError: state.auth.authError,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        signUp: (newUser:any) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);