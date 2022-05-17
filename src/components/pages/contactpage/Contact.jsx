import {Form, Button} from 'react-bootstrap'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Contact.css'

function Contact() {

    const navigate=useNavigate();

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');

    const nameRegex=/^$|^[A-Za-z ]+$/;
    const emailRegex=/^$|^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const msgRegex=/^$|^[a-zA-Z0-9., ]+$/;

    const handleNameChange=(e)=>{
        setName(e.target.value);
    };

    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    };

    const handleMessage=(e)=>{
        setMessage(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Hi ${name},\nWe will reply to you via ${email}.\n\nThank You`);
        navigate('/');
    };

  return (
    <div className='contact-main'>
        <h1 className='text-white display-3'>Contact Us</h1>
        <p className='text-white h4'>Tell us what you think</p>
        <div className='inputarea'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId='nameinput'>
                    <Form.Label className='text-white'>Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter name' onInput={e=>handleNameChange(e)} value={name}/>
                    {!nameRegex.test(name) && <p className='text-danger'>*Enter valid name</p>}
                </Form.Group>
                <Form.Group className='mb-3' controlId='emailinput'>
                    <Form.Label className='text-white'>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter a valid email' onInput={e=>handleEmailChange(e)} value={email}/>
                    {!emailRegex.test(email) && <p className='text-danger'>*Email address not valid</p>}
                </Form.Group>
                <Form.Group className='mb-3' controlId='message'>
                    <Form.Label className='text-white'>Message</Form.Label>
                    <Form.Control as='textarea' rows={3} placeholder='Type your message here' onInput={e=>handleMessage(e)} value={message}/>
                    {!msgRegex.test(message) && <p className='text-danger'>*Malicious charecters found in message</p>}
                </Form.Group>
                <Button variant='primary' type='submit'>Submit</Button>
            </Form>
        </div>
    </div>
  )
}

export default Contact