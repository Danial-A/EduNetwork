import userEvent from '@testing-library/user-event'
import Axios from 'axios'
import React, {useState} from 'react'
import moment from 'moment'


import './comment.css'
function DisplayComments(postid) {
    let [comments, setComments] = useState([])
    Axios.get(`http://localhost:5000/comments/${postid}`)
    .then(comment => {
        setComments(comment)
    })
    .catch(err=> console.log(err))
    return (
        <div>
           <pre>Comments</pre>
           {
               comments.length > 0 ? (comments.map(com =>(
                <div className="comment">
                     <pre>{com.username}</pre>
                     <p>{com.comment}</p>
                     <pre>Added: {moment(com.createdAt).fromNow()}</pre>
                </div>
            ))) : <p>No Comments</p>
            }
        </div>
    )
}

export default DisplayComments
