import React from 'react'
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'davidmayshiogie';

function LoginForm() {

    const [user, setUser] = React.useState({username : '', password : ''})

    const handlePost = () => {
        const token = jwt.sign(user, SECRET_KEY);
        console.log(token);
    
        fetch('http://localhost:3001/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token: token})
        }).then( (res) => {
        return res.json()
        }).then(data => {
          console.log(data);
        })
    }
     
    return (
        <div>
            <input type="text" placeholder="username" value={user.username} onChange={res => setUser({...user, username : res.target.value})} required/>
            <input type="text" placeholder="password" value={user.password} onChange={res => setUser({...user, password : res.target.value})} required/>
            <input type="submit" value="Submit" onClick={handlePost}/>
        </div>
    )
}

export default LoginForm
