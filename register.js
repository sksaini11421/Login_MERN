import React,{useState} from 'react'
import './register.css'
import axios  from 'axios'

const Register = () => {
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })
    const handleChange = (e) =>{
        const {name , value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const register =() =>{
        const {name, email, password, reEnterPassword} = user
        if(name && email && (password === reEnterPassword)){
            alert('posted/registered')
            axios.post("http://localhost:5000/register",user)
            .then(res => console.log(res))
        }
        else{
            alert('invalid Input')
        }
    }
    return (
        <div className="user">
            <h1>Register Page</h1>
            <div>
                <input type="text" name="name" value={user.name} placeholder="Please Enter Your Name" onChange={handleChange}/>
            </div>
            <div>
            {console.log(user)}
                <input type="email" name="email" value={user.email} placeholder="Please Enter Your E-Mail" onChange={handleChange}/>
            </div>
            <div>
                <input type="password" name="password"  value={user.password}  placeholder="Enter your Password" onChange={handleChange}/>
            </div>
            <div>
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-Enter your Password" onChange={handleChange}/>
            </div>
            <div>OR</div>
            <button type="submit" className="button" onClick={register}>Login</button>
        </div>
    )
}

export default Register
