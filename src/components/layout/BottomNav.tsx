import React, { Component } from 'react'

export default class BottomNav extends Component {
    render() {
        return (
            <div className="navbar-fixed" style={{bottom:"0", position:"absolute"}}>
                <nav>
                    <div className="nav-wrapper row white">
                        <ul>
                            <li className="col s3"><a href="./"><i className="material-icons" style={{color:"grey"}}>home</i></a></li>
                            <li className="col s3"><a href="./"><i className="material-icons" style={{color:"grey"}}>person</i></a></li>
                            <li className="col s3"><a href="./"><i className="material-icons" style={{color:"grey"}}>refresh</i></a></li>
                            <li className="col s3"><a href="./"><i className="material-icons" style={{color:"grey"}}>face</i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
