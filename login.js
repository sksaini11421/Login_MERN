import React,{useState} from 'react'
import "./login.css";
const Login = () => {

    const [user , setUser] = useState({
        email:"",
        password:"",
    });
    const handleChange = (e) =>{
        const {name , value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <div>
            <h1>login page~~@@</h1>
            {console.log(user)}
            <div>
                <input type="email" name="email" value={user.email} placeholder="Please Enter Your E-Mail" onChange={handleChange}/>
            </div>
            <div>
                <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}/>
            </div>
            <div>OR</div>
            <button type="submit" className="button">Register</button>
        </div>
    )
}

export default Login
