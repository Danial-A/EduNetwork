import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './post.css'
import { faThumbsUp, faComment, faShare, faSave, faTrash,faEdit,faArchive } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Axios from 'axios'
function Post({posts, loading}) {

    const DeletePost = (postid)=>{
        Axios.delete(`http://localhost:5000/posts/${postid}`)
        .then(res=>{
            window.alert("Post Deleted");
            window.location.reload(false);
            console.log(res.data)
        })
        .catch(err=>{console.log(err)})
        }

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
                      <div className="row" style = {{justifyContent:"space-between"}}>
                        <div className="col-md-8">
                            <div className="post-heading">
                                <h4>{post.postTitle}</h4>
                            </div>
                        </div>
                        <div className="co-md-4">
                        <div className="delete-icons-row">
                            <Link ><FontAwesomeIcon icon = {faTrash} onClick = {()=>DeletePost(post._id)}/></Link>
                            <Link><FontAwesomeIcon icon = {faEdit}/></Link>
                            <Link><FontAwesomeIcon icon = {faArchive}/></Link>
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

