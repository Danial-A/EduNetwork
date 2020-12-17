import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './post.css'

function Post({posts, loading}) {

    if(loading){
        return <h2>Loading...</h2>
    }

    return (
        <div className="container-fluid">
            {
                posts.map(post=>(
                    <div key = {post.id} className="post-container ">
                    <div className="post-heading">
                        <h4>{post.title}</h4>
                    </div>
                    <div className="post-body">
                        <p>{post.body}</p>
                    </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Post
