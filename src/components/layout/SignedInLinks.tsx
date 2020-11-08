import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';



interface IProps {
    signOut:Function;
    drawerClose:Function;
}
class SignedInLinks extends Component<IProps,{}> {
    render() {
        return (
            <List>
                <Link to="/signin">
                    <ListItem button key="logout">
                        <ListItemIcon onClick={() =>{this.props.signOut();this.props.drawerClose();}}><ExitToAppIcon/></ListItemIcon>
                        <ListItemText onClick={() =>{this.props.signOut();this.props.drawerClose();}} primary={"ログアウト"} />
                    </ListItem>
                </Link>
                <Link to="/mypage">
                    <ListItem button key="mypage">
                        <ListItemIcon ><AccountBoxIcon/></ListItemIcon>
                        <ListItemText primary={"マイページ"} />
                    </ListItem>
                </Link>
                <Link to="/myshop">
                    <ListItem button key="myshop">
                        <ListItemIcon ><StorefrontIcon/></ListItemIcon>
                        <ListItemText primary={"マイショップ"} />
                    </ListItem>
                </Link>
                <Link to="/contact">
                    <ListItem button key="contact">
                        <ListItemIcon ><ContactSupportIcon/></ListItemIcon>
                        <ListItemText primary={"お問い合わせ"} />
                    </ListItem>
                </Link>
                <Divider />
                <Link to="/">
                    <ListItem button key="riyoukiyaku">
                        <ListItemIcon ><AnnouncementIcon color="error"/></ListItemIcon>
                        <ListItemText style={{color:"red"}} primary={"利用規約"} />
                    </ListItem>
                </Link>
                <Link to="/">
                    <ListItem button key="riyouzyounotyui">
                        <ListItemIcon ><AnnouncementIcon color="error"/></ListItemIcon>
                        <ListItemText style={{color:"red"}}  primary={"ご利用上の注意"} />
                    </ListItem>
                </Link>
                <Link to="/">
                    <ListItem button key="免責事項">
                        <ListItemIcon ><AnnouncementIcon color="error"/></ListItemIcon>
                        <ListItemText style={{color:"red"}}  primary={"免責事項"} />
                    </ListItem>
                </Link>
            </List>
        )
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);