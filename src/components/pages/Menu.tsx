import React, { Component } from 'react'
import firebase from '../../config/fbConfig'
import { Card,CardActionArea,CardContent} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image'
import MenuCreateModal from '../shop/MenuCreateModal';
import { connect } from 'react-redux'


interface IState {
    name:string
    menu:JSX.Element[]
    userId:string
}
interface IProps {
    match:{
        params:{
            id:string
        }
    }
    auth:any
}


class Menu extends Component<IProps,IState> {
    constructor(props:IProps){
        super(props)
        this.state={
            name:"",
            menu:[],
            userId:""
        }
        this.getMenu = this.getMenu.bind(this)
        this.getMenu()
    }
    

    getMenu():void {
        var db = firebase.firestore()
        db.collection('shops').doc(this.props.match.params.id).get()
        .then((snapshot) => {
            var data:firebase.firestore.DocumentData|undefined = snapshot.data()
            var menu:JSX.Element[] = []
            if(data===undefined){
                alert("そのお店のデータはありません。")
                return 
            }
            data.menu.forEach((element:any) => {
                menu.push(
                    <Card style={{float:"left",width:"33%",marginTop:"3px",boxShadow:"none"}}>
                        <CardActionArea >
                            <CardContent>
                                {element.image.includes(".mp4")
                                ?
                                <video controls style={{width:"100%",alignItems: "center",display: "flex"}}>
                                    <source src={element.image}
                                            type="video/mp4" />
                                            ビデオが対応していないブラウザです。ごめんなさい。<br/>
                                            推奨環境:chrome
                                </video>
                                :
                                <Image style={{boxShadow:"0px 2px 10px 0px"}} src={element.image===""?"nodata":element.image}/>
                                }
                                <Typography style={{fontFamily:"serif",display:"inline-block",fontSize:"2vw",marginTop:"15px"}} gutterBottom variant="h5" component="h2">
                                    {element.name}
                                </Typography>
                                <br/>
                                <Typography style={{display:"inline-block",fontSize:"1.5vw"}} variant="body2" color="textSecondary" component="p">
                                    {element.price+"円"}(税込)
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )
            });
            this.setState({
                name:data.name,
                menu:menu,
                userId:data.user
            })
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
    }
    render() {
        return (<div>
            {
                this.state.userId===this.props.auth.uid
                ?
                <MenuCreateModal id={this.props.match.params.id}/>
                :
                null
            }
            <hr/>
                {this.state.menu}
            </div>
            )
    }
}

const mapStateToProps = (state:any) => {
    return {
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps, null)(Menu);
