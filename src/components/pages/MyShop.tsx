import React, { Component } from 'react'
import firebase from '../../config/fbConfig'
import ShopCard from '../shop/ShopCard'
import { connect } from 'react-redux'
import ShopCreateModal from '../shop/ShopCreateModal'

interface IProps {
    auth:any
}
interface IState {
    shopCard:any[]
}

class MyShop extends Component<IProps,IState> {
    constructor(props:any){
        super(props)
        this.state = {
            shopCard : []
        }
        this.makeMyShopCard = this.makeMyShopCard.bind(this)
        this.makeMyShopCard()
    }
    makeMyShopCard(){
        var shopCard:any[] = []
        var db = firebase.firestore()
        db.collection('shops')
            .where('user',"==",this.props.auth.uid)
            .get()
                .then((snapshot) => {
                    if (snapshot.empty) {
                        alert("登録されているお店はありません")
                        return 
                    }
                    snapshot.forEach(doc =>{
                        shopCard.push(<ShopCard id={doc.id} style={{width:"100%"}}/>)
                    })
                    this.setState({
                        shopCard:shopCard
                    })
                })
                .catch((err) => {
                    console.log('Error getting documents', err);
                });
    }
    render() {
        return (
            <div>
                <ShopCreateModal id={this.props.auth.uid}/>
                {this.state.shopCard}
            </div>
        )
    }
}
const mapStateToProps = (state:any) => {
    return {
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps, null)(MyShop);

