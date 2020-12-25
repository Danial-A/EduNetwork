import React from 'react'
import {Formik, useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import './comment.css'
import DisplayComments from './comments-display'
function PostComment() {
    const initialValues = {
        username: 'Danial',
        comment: ''
    }

    const validationSchema = Yup.object({
        comment: Yup.string().required('This field is required..')
    })
    const onSubmit = (values, onSubmitProps) =>{
         let totalComments = axios.get('http://localhost:5000/posts/')
         .then(res => {
             
         })
         .catch(err => console.log(err))
        onSubmitProps.resetForm()
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
        <div>
        <div className="comments-section">
            <DisplayComments />
        </div>
            <div className ="container" style ={{borderTop:"1px solid black", padding: "15px 0"}}>
            <form onSubmit = {formik.handleSubmit}>
                    <label htmlFor="comment">Add a comment: </label>
                    <input type="text" className = "form-control" name = "comment" id = "comment"
                    value = {formik.values.comment} 
                    onChange = {formik.handleChange}
                    onBlur = {formik.handleBlur}
                    />
                    {formik.errors.comment && formik.touched.comment ? <div ><p style = {{color: 'crimson'}}>{formik.errors.comment}</p></div> : null}
                    <div className="comment-btn" style = {{marginTop:"8px", textAlign : "center"}}>
                        <button className = "btn btn-danger" type = 'submit'>Comment</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PostComment
