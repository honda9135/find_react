import React, { Component} from 'react'
import M from 'materialize-css';
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks';
import SignOutLinks from './SignOutLinks';


interface IProps {
    auth:any;
}

class Header extends Component<IProps,{}> {

    componentDidMount(){
        M.AutoInit();
    }
    componentDidUpdate(){
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
                this.props.auth.uid
            ?
                <SignedInLinks/>
            :
                <SignOutLinks/>
            }

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