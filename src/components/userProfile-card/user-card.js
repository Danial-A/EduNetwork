import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container } from 'react-bootstrap'
import NavigationBar from '../navigation-bar/navbar'
class userCard extends React.Component {
    render(){
    return (   
        <div className = "card-main">
            <h4>User name</h4>
            <pre>Online</pre>
            <div className="user-image">
                <img src="/images/Dp.svg" alt=""/>
            </div>
            <button className = 'user-status'>Admin</button>
            <pre>Member Since: {new Date().getMonth()}, {new Date().getFullYear()}</pre>
            <div className="user-info-section">
                <ul>
                    <li>Posts <a href="#">4</a></li>
                    <li>Contributions <a href="#">32</a></li>
                    <li>Tasks Done: <a href="#">23</a></li>
                </ul>
            </div>
        </div>
    )
    }
}

export default userCard
