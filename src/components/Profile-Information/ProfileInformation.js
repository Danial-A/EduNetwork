import React from 'react'
import '../../pages/UserProfile.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faThumbsUp, faUsers, faTasks} from '@fortawesome/free-solid-svg-icons'
import {Link } from 'react-router-dom'


function ProfileInformation() {
    return (
        <div className="user-info">
            <div className="user-heading"> 
                <h3>Profile Information</h3>
            </div>
            <div className="information-section">
                <ul>
                    <li><Link><FontAwesomeIcon icon = {faEdit} className = "icon"/>Posts</Link></li>
                    <li><Link><FontAwesomeIcon icon = {faThumbsUp} className = "icon"/>Likes</Link></li>
                    <li><Link><FontAwesomeIcon icon = {faUsers} className = "icon"/>Groups</Link></li>
                    <li><Link><FontAwesomeIcon icon = {faTasks} className = "icon"/>Contributions</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInformation
