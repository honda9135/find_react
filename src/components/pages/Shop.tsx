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


class Shop extends Component<IProps,IState> {
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
                    <Card style={{float:"left",width:"33%",marginTop:"3px"}}>
                        <CardActionArea>
                            <CardContent>
                                    <Image src={element.image===""?"nodata":element.image}/>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {element.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    値段（税込み）:{element.price+"円"}
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
            <h1>{this.state.name}</h1>
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

export default connect(mapStateToProps, null)(Shop);
