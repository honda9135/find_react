import React, { Component} from 'react'
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks';
import SignOutLinks from './SignOutLinks';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import DehazeIcon from '@material-ui/icons/Dehaze';


interface IProps {
    auth:any;
}

interface IState{
    flag:boolean
}

class Header extends Component<IProps,IState> {
    constructor(props:IProps){
        super(props);
        this.state = {
            flag:false
        }
    }
    render() {
        return (
            <div id="header">
            <nav>
                <div className="nav-wrapper green">
                <a href="/" style={{fontSize:45}}>Find</a>
                <Button className="right" style={{height:"100%"}} onClick={()=>{this.setState({flag:true})}}><DehazeIcon>Dehaze</DehazeIcon></Button>
                <Drawer anchor="right" open={this.state.flag} onClose={() =>{this.setState({flag:false})}}>
                {
                    this.props.auth.uid
                ?
                    <SignedInLinks drawerClose={()=>{this.setState({flag:false})}}/>
                :
                    <SignOutLinks/>
                }
                </Drawer>
                </div>
            </nav>
            </div>
        )
    }
}
const mapStateToProps = (state:any) => {
    return {
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps, null)(Header);