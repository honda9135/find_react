import React, { Component } from 'react'

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

export default class BottomNav extends Component {
    render() {
        return (
            <div style={{minHeight:"10vh"}}>
                <BottomNavigation style={{width:"100%", position:"fixed", bottom:"0"}}>
                        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
                        <BottomNavigationAction label="Search" icon={<SearchOutlinedIcon />} />
                        <BottomNavigationAction label="Person"  icon={<PersonOutlineOutlinedIcon />} />
                </BottomNavigation>
            </div>
        )
    }
}
