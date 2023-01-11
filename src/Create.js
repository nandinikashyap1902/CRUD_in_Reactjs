import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Employee from './Employee';
import {v4 as uuid} from 'uuid'
import {Link,useNavigate} from 'react-router-dom'

function Create() {
    const [name,setName] = useState("");
    const [age, setAge]= useState("");
  let history = useNavigate();
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const ids=uuid();
    let uniqueId = ids.slice(0,8);
    let a = name,
    b = age;
    Employee.push({id:uniqueId, Name:a,Age:b});
    history('/')  
}
    return (
    <div>
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"></label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label"></label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={(e)=>handleSubmit(e)}>Submit</button>
</form>
    </div>
  )
}

export default Create