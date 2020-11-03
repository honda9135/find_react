import React, { Component } from 'react'
import firebase from '../../config/fbConfig'
import ShopCard from './ShopCard'

interface IProps {
    pref:string;
    city:string;
    searchWord:string
}
interface IState {
    shopCard:any[]
}

export default class ShopDisp extends Component<IProps,IState> {
    constructor(props:any){
        super(props)
        this.state = {
            shopCard : []
        }
    }
    componentDidUpdate(){
        var shopCard:any[] = []
        var db = firebase.firestore()
        db.collection('shops')
            .where('pref',"==",this.props.pref)
            .where('city',"==",this.props.city)
            .get()
                .then((snapshot) => {
                    if (snapshot.empty) {
                        alert("検索結果が見つかりませんでした。")
                        return 
                    }
                    snapshot.forEach(doc =>{
                        shopCard.push(<ShopCard id={doc.id}/>)
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
                {this.state.shopCard}
            </div>
        )
    }
}
