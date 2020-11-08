import React, { Component } from 'react'
import firebase from '../../config/fbConfig'
import { Card,CardActionArea,CardContent} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image'



interface IState {
    name:string,
    category:string[],
    shop_image:""
}
interface IProps {
    id:string
    style:any
}


export default class ShopCard extends Component<IProps,IState> {
    constructor(props:any){
        super(props)
        this.state={
            name:"",
            category:[],
            shop_image:"",
        }
        this.getShops = this.getShops.bind(this)
        this.getShops()
    }
    

    getShops() {
        var db = firebase.firestore()
        db.collection('shops').doc(this.props.id).get()
        .then((snapshot) => {
            var data:any = snapshot.data()
            this.setState({
                name:data.name,
                category:data.category,
                shop_image:data.shop_image
            })
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
    }
    render() {
        return (
            <Card style={this.props.style}>
            <CardActionArea>
                <CardContent>
                    <a href={"/shop/"+this.props.id}>
                        <Image src={this.state.shop_image}/>
                    </a>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.state.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Category:{this.state.category}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        )
    }
}
