import React, { Component } from 'react'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

export default class SignOutLinks extends Component {
    render() {
        return (
            <List>
            <Link to="/signin">
                <ListItem button key="login">
                    <ListItemIcon ><ExitToAppIcon/></ListItemIcon>
                    <ListItemText  primary={"ログイン"} />
                </ListItem>
            </Link>
            <Link to="/signup">
                <ListItem button key="signup">
                    <ListItemIcon ><AssignmentIndIcon/></ListItemIcon>
                    <ListItemText primary={"サインアップ"} />
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
            // <ul className="sidenav" id="mobile-demo">
            //     <li><a href="/signin" className='green-text'>ログイン</a></li>
            //     <li><a href="/signup" className='green-text'>サインアップ</a></li>
            //     <li><a href="/contact" className='green-text'>お問い合わせ</a></li>
            //     {/* <li><a href="/">お気に入り</a></li> */}
            //     <hr/>
            //     <li><a href="/" className='red-text'>ご利用畳の注意</a></li>
            //     <li><a href="/" className='red-text'>利用規約</a></li>
            //     <li><a href="/" className='red-text'>免責事項</a></li>
            //     <hr/>
            // </ul>
        )
    }
}

