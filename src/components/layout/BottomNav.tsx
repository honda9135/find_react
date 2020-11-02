import React, { Component } from 'react'

export default class BottomNav extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper row white">
                    <ul className="">
                        <li className="col s3"><a href="./"><i className="material-icons" style={{color:"grey"}}>home</i></a></li>
                        <li className="col s3"><a href="./"><i className="material-icons" style={{color:"grey"}}>person</i></a></li>
                        <li className="col s3"><a href="./"><i className="material-icons" style={{color:"grey"}}>refresh</i></a></li>
                        <li className="col s3"><a href="./"><i className="material-icons" style={{color:"grey"}}>face</i></a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
