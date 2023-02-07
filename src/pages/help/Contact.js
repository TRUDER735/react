import React from "react"
import { Form, redirect, useActionData } from "react-router-dom"

const Contact = (props) => {

    const data = useActionData()

    return (
        <div className="contact">
            <h3>Contact Us</h3>
            <Form method="post" action="/help/contact">
                <label>
                    <span>You Email:</span>
                    <input type='email' name='email' required/>
                </label>
                <label>
                    <span>Message:</span>
                    <input type='text' name='message' required/>
                </label>
            <button>Submit</button>

            {data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
    )
}

export default Contact


export const contactAction = async ({request}) => {
    console.log(request);
    const data = await request.formData()

    const submission = {
        name: data.get('email'),
        message: data.get('message')
    }

    console.log(submission);

   //Send post request to the API or Database 


    if(submission.message.length < 10) {
        return {error: 'message must be 10 chars longer'}
    }


    // redirect
    return redirect('/  ')
}