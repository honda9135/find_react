import React, { Component } from 'react'
import firebase from '../../config/fbConfig'
import { Card,CardActionArea,CardContent} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image'


interface IState {
    name:string
    menu:JSX.Element[]
}
interface IProps {
    match:{
        params:{
            id:string
        }
    }
}


export default class Shop extends Component<IProps,IState> {
    constructor(props:any){
        super(props)
        this.state={
            name:"",
            menu:[]
        }
        this.getMenu = this.getMenu.bind(this)
        this.getMenu()
    }
    

    getMenu() {
        var db = firebase.firestore()
        db.collection('shops').doc(this.props.match.params.id).get()
        .then((snapshot) => {
            var data:any = snapshot.data()
            var menu:JSX.Element[] = []
            data.menu.forEach((element:any) => {
                menu.push(
                    <Card style={{float:"left",width:"33%",marginTop:"3px"}}>
                        <CardActionArea>
                            <CardContent>
                                    <Image src={element.image}/>
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
                menu:menu
            })
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
    }
    render() {
        return (<div>
            <h1>{this.state.name}</h1>
            <hr/>
            <h2>メニュー</h2>
            {this.state.menu}
            {this.state.menu}
            {this.state.menu}
            {this.state.menu}
            </div>
            )
    }
}
