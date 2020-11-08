import React, { Component } from 'react'
import firebase from '../../config/fbConfig'
import Image from 'material-ui-image'
import { connect } from 'react-redux'


interface IState {
    name:string
    image:string
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
            image:"",
            userId:""
        }
        this.getShop = this.getShop.bind(this)
        console.log(this.props.match.params.id,"id")
        this.getShop()
    }
    

    getShop():void {
        var db = firebase.firestore()
        db.collection('shops').doc(this.props.match.params.id).get()
        .then((snapshot) => {
            var data:firebase.firestore.DocumentData|undefined = snapshot.data()
            if(data===undefined){
                alert("そのお店のデータはありません。")
                return 
            }
            console.log(data,"data")
            this.setState({
                name:data.name,
                image:data.shop_image,
            })
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
    }
    render() {
        return (
            <div>
                <p style={{fontSize:"30px",margin:0}}>{this.state.name}</p>
                <hr/>
                    <Image src={this.state.image}></Image>
                <a href={"/menu/"+this.props.match.params.id}>menuへジャンプ</a>
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
