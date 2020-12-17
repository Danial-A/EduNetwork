import React from 'react'
import '../../pages/UserProfile.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faThumbsUp, faUsers, faTasks} from '@fortawesome/free-solid-svg-icons'


function ProfileInformation() {
    return (
        <div className="user-info">
            <div className="user-heading"> 
                <h3>Profile Information</h3>
            </div>
            <div className="information-section">
                <ul>
                    <li><a href="#"><FontAwesomeIcon icon = {faEdit} className = "icon"/>Posts</a></li>
                    <li><a href="#"><FontAwesomeIcon icon = {faThumbsUp} className = "icon"/>Likes</a></li>
                    <li><a href="#"><FontAwesomeIcon icon = {faUsers} className = "icon"/>Groups</a></li>
                    <li><a href="#"><FontAwesomeIcon icon = {faTasks} className = "icon"/>Contributions</a></li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInformation
