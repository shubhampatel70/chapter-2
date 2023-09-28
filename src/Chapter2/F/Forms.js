import React,{useState} from 'react';

function Forms() {
    
const [data,setData] = useState({
  username:"",
  email:"",
  password:""
})

const {username,email,password} = data;

const changeHandler = e => {
  setData({...data,[e.target.name]:[e.target.value]});
}

const submitHandler = e => {
  e.preventDefault();
  console.log(data);
}
  return (
    <>
        <h1 style={{color: 'crimson'}}>Task-f</h1>
        <form onSubmit={submitHandler}>
        <input type="text" name="username" onChange={changeHandler} placeholder='Username'/><br/>
        <input type="email" name="email" onChange={changeHandler} placeholder='E-mail'/><br/>
        <input type="password" name="password"onChange={changeHandler} placeholder='Password'/><br/>
        <input type="submit" name="submit"/>
        </form>
        <div>
            <p>Username : {username}</p>
            <p>E-mail : {email}</p>
            <p>Password : {password}</p>
        </div>
    </>

  );
}

export default Forms;