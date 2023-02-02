import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login=()=>{
    let navigate = useNavigate();
    const [user,setUser] = useState({email:'',password:''})

    const handleChange=(e)=> {
        setUser({...user,[e.target.name]:e.target.value});
    }

    const submitForm=(e)=>{
        e.preventDefault();
        const sendData = {
            email:user.email,
            password:user.password
        }
        console.log(sendData);

        const deptsURL = "http://localhost/react-php/login.php";
        var vAttributes = {};
        vAttributes = {
            email:user.email,
            password:user.password
        };
        const ops = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            data: JSON.stringify(vAttributes) ,
            url: deptsURL
        };
        axios( ops).then((res) => {
            console.log("post response: " + JSON.stringify(res.data));
            let data = res.data.data;//JSON.parse(res.data);
            if(data.status == 200) {
                window.localStorage.setItem('email',data.email);
                window.localStorage.setItem('userName',data.first_name+ " "+data.last_name);
                navigate('./dashboard');
            } else {
                alert('Invalid User');
            }
        }).catch(function (error) {
            console.log("post error: " + error);
        });
    }

    return(
        <form onSubmit={submitForm}>
        <div className="main-box">
                <div className="col-md-12 text-center"><h1>Login Page</h1></div>
        
            <div className="row">
                <div className="col-md-6">Email</div>
                <div className="col-md-6">
                    <input type="email" name="email" className="form-control" 
                     onChange={handleChange} value={user.email}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">Password</div>
                <div className="col-md-6">
                    <input type="password" name="password" className="form-control" 
                    onChange={handleChange} value={user.password}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 text-center">
                    <input type="submit" name="submit" value="Please Login" className="btn btn-success"/>
                </div>
            </div>

        </div>
        </form>
    )
}

export default Login;