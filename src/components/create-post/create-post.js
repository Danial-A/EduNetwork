import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './create-post.css'
import { useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

function UserPost() {

    const initialValues = {
        postTitle: '',
        postDescription: '',
        date: '2020-05-29T02:22:49.052+00:00'
    }
    const onSubmit = values =>{
        axios.post('http://localhost:5000/posts/add')
        .then(res =>{console.log(res.data)})
        .catch(err =>{ console.log("Error: "+err)})
        console.log(values)
    }
    const validationSchema = Yup.object({
        postTitle: Yup.string().required('This field is required..'),
        postDescription: Yup.string().required('This field is required..')
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })


    return (
        <div>
            <div className="container">
            <h3 style = {{color:'white'}}>Create a new post..</h3>
            <form onSubmit = {formik.handleSubmit}>
                <div className="row">
                <div className="col post-heading">
                    <label htmlFor="postheading" style= {{color:'white'}}>Post Heading:</label>
                    <input type="text" name="postTitle" id="postTitle" style = {{width: "100%"}}
                        placeholder ="Enter the post title..."
                        onChange = {formik.handleChange}
                        onBlur = {formik.onBlur}
                        value = {formik.values.postTitle}
                    />
                    {formik.errors.heading && formik.touched.heading ? <div style = {{color: 'crimson'}}><p>{formik.errors.heading}</p></div> : null}
                </div>
                </div>
                <div className="row">
                <div className="col">
                    <div className="post-body">
                        <label htmlFor="postbody" style= {{color:'white'}}>Post Body: </label>
                        <textarea name="postDescription" id="postDescription" rows="6" 
                        placeholder = "Enter the post description...."
                        onChange = {formik.handleChange}
                        onBlur = {formik.onBlur}
                        value = {formik.values.postDescription}
                        />
                        {formik.errors.postbody && formik.touched.postbody ? <div style = {{color: 'crimson'}}><p>{formik.errors.postbody}</p></div> : null}
                    </div>
                    </div>
                </div>
                <div className="add-post-button">
                    <button type = "submit">Add Post!</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default UserPost
