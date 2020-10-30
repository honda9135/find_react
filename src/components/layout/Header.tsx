import React, { Component} from 'react'
import M from 'materialize-css';
import SignedInLinks from './SignedInLinks';
import SignOutLinks from './SignOutLinks';

interface IState {
    auth: boolean;
}

export default class Header extends Component<{},IState> {

    constructor(props:any){
        super(props);
        this.state = {
            auth:true
        };
    }

    componentDidMount(){
        M.AutoInit();
    }
    render() {
        return (
            <div id="header">
            <nav>
                <div className="nav-wrapper green">
                <a href="/" className="brand-logo">Find</a>
                <a href="#1" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
                </div>
            </nav>
            {
                this.state.auth
            ?
                <SignedInLinks/>
            :
                <SignOutLinks/>
            }

            </div>
        )
    }
}
