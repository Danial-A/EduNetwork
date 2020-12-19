import { faUser, faEnvelope, faCalendar, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import './UserInformation.css'
function UserInformation() {
    return (
        <div className = "user-information-section">
            <div className ="user-information-heading"> 
                <h3>User Information</h3>
            </div>
            <div className="user-information-display">
                <ul>
                    <li><FontAwesomeIcon icon = {faUser} className = "icon"/>Name: <pre> Danial Ahmad</pre></li>
                    <li><FontAwesomeIcon icon = {faUsers} className = "icon"/>Username:<pre> Daniyal123</pre></li>
                    <li><FontAwesomeIcon icon = {faEnvelope} className = "icon"/>Email:<pre> dani123.da1@gmail.com</pre></li>
                    <li><FontAwesomeIcon icon = {faCalendar} className = "icon"/>DOB:<pre> 23-08-1997</pre></li>
                   
                </ul>
            </div>
            <div className="edit-btn">
                <button>Edit Profile Information</button>
            </div>
        </div>
    )
}

export default UserInformation
