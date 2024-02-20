import React from 'react'
import {Form, Input} from 'antd';
import '../Pages/addressDetails.css'
import {useNavigate} from 'react-router-dom';

const AddressDetails = () => {
    const navigate = useNavigate();
    const handleSubmit=()=>{
        console.log("Form Submitted");
        navigate("/faq")
    }
  return (
    <>
    <div className="form-container">
        <h2>Address Details</h2>
        <Form layout="vertical" className="register-form">
            <Form.Item label="Address Line 1">
                <Input type="text" />
            </Form.Item>
            <Form.Item label="Address Line 2">
                <Input type="text" />
            </Form.Item>
            <Form.Item label="City">
                <Input type="text" />
            </Form.Item>
            <Form.Item label="State">
                <Input type="text" />
            </Form.Item>
            <Form.Item label="Country">
                <Input type="text" />
            </Form.Item>
            <Form.Item label="ZIP">
                <Input type="text" />
            </Form.Item>
        </Form>
        <button className="submit-btn" onClick={handleSubmit}>
            Submit
        </button>
    </div>
    </>
  )
}

export default AddressDetails;
