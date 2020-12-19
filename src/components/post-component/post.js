import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './post.css'
import { faThumbsUp, faComment, faShare, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import moment from 'moment'
function Post({posts, loading}) {

    if(loading){
        return <h2>Loading...</h2>
    }
    return (
        <div className="container-fluid">
            {
                posts.map(post=>(
                    
                    <div key = {post._id} className="post-container container">
                      <div className="row user-info-row">
                        <div className="col-md-6">
                           <span className = "user-heading">User:</span> Danial Ahmad
                        </div>
                        <div className="col-md-6">
                            <pre>Created: {moment(post.createdAt).fromNow()}</pre>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                            <div className="post-heading">
                                <h4>{post.postTitle}</h4>
                            </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                            <div className="post-body">
                                <p>{post.postDescription}</p>
                            </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 like-icons-row">
                            <Link><FontAwesomeIcon icon = {faThumbsUp}/></Link>
                            <Link><FontAwesomeIcon icon = {faComment}/></Link>
                            <Link><FontAwesomeIcon icon = {faShare}/></Link>
                            <Link><FontAwesomeIcon icon = {faSave}/></Link>
                            
                        </div>
                        <div className="col-md-6 like-row">
                            <Link>Like</Link>
                            <Link>Comment</Link>
                            <Link>Share</Link>
                            <Link>Report!</Link>
                        </div>
                      </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Post

