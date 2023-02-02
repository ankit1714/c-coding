import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register=(props)=>{
    let history = useNavigate();

    const [data, setData]=useState({
        first_name:"",
        last_name:"",
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        console.log(data);
    }

    const submitForm=(e)=>{
        e.preventDefault();
        const sendData = {
            first_name:data.first_name,
            last_name:data.last_name,
            email:data.email,
            password:data.password
        }
        console.log(sendData);

        const deptsURL = "http://localhost/react-php/insert.php";
        var vAttributes = {};
        vAttributes = {
            first_name:data.first_name,
            last_name:data.last_name,
            email:data.email,
            password:data.password
        };
        const ops = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            data: JSON.stringify(vAttributes) ,
            url: deptsURL
        };
        axios( ops).then((res) => {
            console.log("post response: " + JSON.stringify(res.data));
            if(res.data.status === 'invalid') {
                alert('Invalid User');
            } else {
                history('./dashboard');
            }
        }).catch(function (error) {
            console.log("post error: " + error);
        });
    }

    return(
        <div className="main-box">
        <form onSubmit={submitForm}>
            <div className="row">
                <div className="col-md-12 text-center"><h1>Register</h1></div>
            </div>

            <div className="row">
                <div className="col-md-6">First Name</div>
                <div className="col-md-6">
                    <input type="text" name="first_name" className="form-control"/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">Last Name</div>
                <div className="col-md-6">
                    <input type="text" name="last_name" className="form-control"/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">Email</div>
                <div className="col-md-6">
                    <input type="email" name="email" className="form-control"/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">Password</div>
                <div className="col-md-6">
                    <input type="password" name="password" className="form-control"/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 text-center">
                    <input type="submit" name="submit" value="Register" className="btn btn-success"/>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Register;